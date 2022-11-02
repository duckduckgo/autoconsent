import { rules as dynamicRules, createAutoCMP } from './index';
import { MessageSender, AutoCMP, RuleBundle, Config, ConsentState } from './types';
import { ConsentOMaticCMP, ConsentOMaticConfig } from './cmps/consentomatic';
import { AutoConsentCMPRule } from './rules';
import { enableLogs } from './config';
import { BackgroundMessage, InitMessage } from './messages';
import { prehide, undoPrehide } from './rule-executors';
import { evalState, resolveEval } from './eval-handler';

export * from './index';

export default class AutoConsent {
  id = window.crypto.randomUUID();
  rules: AutoCMP[] = [];
  config: Config;
  foundCmp: AutoCMP = null;
  state: ConsentState = {
    lifecycle: 'loading',
    prehideOn: false,
    findCmpAttempts: 0,
    detectedCmps: [],
    detectedPopups: [],
  }; 
  protected sendContentMessage: MessageSender;

  constructor(sendContentMessage: MessageSender, config: Config = null, declarativeRules: RuleBundle = null) {
    evalState.sendContentMessage = sendContentMessage;
    this.sendContentMessage = sendContentMessage;
    this.rules = [...dynamicRules];

    enableLogs && console.log('autoconsent init', window.location.href);
    if (config) {
      this.initialize(config, declarativeRules);
      this.state.lifecycle = 'initialized';
    } else {
      if (declarativeRules) {
        this.parseRules(declarativeRules);
      }
      const initMsg: InitMessage = {
        type: "init",
        url: window.location.href,
      };
      sendContentMessage(initMsg);
      this.state.lifecycle = 'waitingForInitResponse';
    }
  }

  initialize(config: Config, declarativeRules: RuleBundle) {
    this.config = config;
    if (!config.enabled) {
      enableLogs && console.log("autoconsent is disabled");
      return;
    }

    if (declarativeRules) {
      this.parseRules(declarativeRules);
    }
    if (config.disabledCmps?.length > 0) {
      this.disableCMPs(config.disabledCmps);
    }

    if (config.enablePrehide) {
      if (document.documentElement) {
        this.prehideElements(); // prehide as early as possible to prevent flickering
      } else {
        // we're injected really early
        const delayedPrehide = () => {
          window.removeEventListener('DOMContentLoaded', delayedPrehide);
          this.prehideElements();
        }
        window.addEventListener('DOMContentLoaded', delayedPrehide);
      }
    }

    // start detection
    if (document.readyState === 'loading') {
      const onReady = () => {
        window.removeEventListener('DOMContentLoaded', onReady);
        this.start();
      }
      window.addEventListener('DOMContentLoaded', onReady);
    } else {
      this.start();
    }
  }

  parseRules(declarativeRules: RuleBundle) {
    Object.keys(declarativeRules.consentomatic).forEach((name) => {
      this.addConsentomaticCMP(name, declarativeRules.consentomatic[name]);
    });
    declarativeRules.autoconsent.forEach((rule) => {
      this.addCMP(rule);
    });
    enableLogs && console.log("added rules", this.rules);
  }

  addCMP(config: AutoConsentCMPRule) {
    this.rules.push(createAutoCMP(config));
  }

  disableCMPs(cmpNames: string[]) {
    this.rules = this.rules.filter((cmp) => !cmpNames.includes(cmp.name))
  }

  addConsentomaticCMP(name: string, config: ConsentOMaticConfig) {
    this.rules.push(new ConsentOMaticCMP(`com_${name}`, config));
  }

  // start the detection process, possibly with a delay
  start() {
    if (window.requestIdleCallback) {
      window.requestIdleCallback(() => this._start(), { timeout: 500 });
    } else {
      this._start();
    }
  }

  async _start() {
    enableLogs && console.log(`Detecting CMPs on ${window.location.href}`)
    this.state.lifecycle = 'started';
    const cmps = await this.findCmp(this.config.detectRetries);
    this.state.detectedCmps = cmps.map(c => c.name);
    if (cmps.length > 0) {
      const popupLookups: Promise<boolean>[] = [];
      this.state.lifecycle = 'cmpDetected';
      for (const cmp of cmps) {
        enableLogs && console.log("detected CMP:", cmp.name, window.location.href);
        this.sendContentMessage({
          type: 'cmpDetected',
          url: location.href,
          cmp: cmp.name,
        }); // notify the browser
        popupLookups.push(this.waitForPopup(cmp).then((isOpen) => {
          if (isOpen) {
            if (!this.foundCmp) {
              this.foundCmp = cmp;
            }
            this.state.detectedPopups.push(cmp.name);
            this.sendContentMessage({
              type: 'popupFound',
              cmp: cmp.name,
              url: location.href,
            }); // notify the browser
            return true;
          } else {
            return Promise.reject(`${cmp.name} popup not found`);
          }
        }));
      }

      // could use `somethingOpen = await Promise.any(popupLookups).catch(() => false)`, but Promise.any is often unavailable in polyfilled environments
      let somethingOpen = false;
      for (const popupLookup of popupLookups) {
        try {
          await popupLookup;
          somethingOpen = true;
          this.state.lifecycle = 'openPopupDetected';
          break;
        } catch (e) {
          continue;
        }
      }

      if (!somethingOpen) {
        enableLogs && console.log('no popup found');
        if (this.config.enablePrehide) {
          undoPrehide();
          this.state.prehideOn = false;
        }
        return false;
      }

      if (this.config.autoAction === 'optOut') {
        return await this.doOptOut();
      } else if (this.config.autoAction === 'optIn') {
        return await this.doOptIn();
      }

      enableLogs && console.log("waiting for opt-out signal...", location.href);
      return true;
    } else {
      enableLogs && console.log("no CMP found", location.href);
      if (this.config.enablePrehide) {
        undoPrehide();
        this.state.prehideOn = false;
      }
      this.state.lifecycle = 'nothingDetected';
      return false;
    }
  }

  async findCmp(retries: number): Promise<AutoCMP[]> {
    this.state.findCmpAttempts += 1;
    const allFoundCmps: AutoCMP[] = [];

    for (const cmp of this.rules) {
      try {
        if (!cmp.checkRunContext()) {
          continue;
        }
        const result = await cmp.detectCmp();
        if (result) {
          enableLogs && console.log(`Found CMP: ${cmp.name}`);
          allFoundCmps.push(cmp);
        }
      } catch (e) {
        enableLogs && console.warn(`error detecting ${cmp.name}`, e);
      }
    }

    if (allFoundCmps.length > 1) {
      const errorDetails = {
        msg: `Found multiple CMPs, check the detection rules.`,
        cmps: allFoundCmps.map((cmp) => cmp.name),
      };
      enableLogs && console.warn(errorDetails.msg, errorDetails.cmps);
      this.sendContentMessage({
        type: 'autoconsentError',
        details: errorDetails,
      });
    }

    if (allFoundCmps.length === 0 && retries > 0) {
      return new Promise((resolve) => {
        setTimeout(async () => {
          const result = this.findCmp(retries - 1);
          resolve(result);
        }, 500);
      });
    }

    return allFoundCmps;
  }

  async doOptOut(): Promise<boolean> {
    this.state.lifecycle = 'runningOptOut';
    let optOutResult;
    if (!this.foundCmp) {
      enableLogs && console.log('no CMP to opt out');
      optOutResult = false;
    } else {
      enableLogs && console.log(`CMP ${this.foundCmp.name}: opt out on ${window.location.href}`);
      optOutResult = await this.foundCmp.optOut();
      enableLogs && console.log(`${this.foundCmp.name}: opt out result ${optOutResult}`);
    }

    if (this.config.enablePrehide) {
      undoPrehide();
      this.state.prehideOn = false;
    }

    this.sendContentMessage({
      type: 'optOutResult',
      cmp: this.foundCmp ? this.foundCmp.name : 'none',
      result: optOutResult,
      scheduleSelfTest: this.foundCmp && this.foundCmp.hasSelfTest,
      url: location.href,
    });

    if (optOutResult && !this.foundCmp.isIntermediate) {
      this.sendContentMessage({
        type: 'autoconsentDone',
        cmp: this.foundCmp.name,
        url: location.href,
      });
      this.state.lifecycle = 'done';
    } else {
      this.state.lifecycle = optOutResult ? 'optOutSuceeded' : 'optOutFailed';
    }
    this.sendReport();

    return optOutResult;
  }

  async doOptIn(): Promise<boolean> {
    this.state.lifecycle = 'runningOptIn';
    let optInResult;
    if (!this.foundCmp) {
      enableLogs && console.log('no CMP to opt in');
      optInResult = false;
    } else {
      enableLogs && console.log(`CMP ${this.foundCmp.name}: opt in on ${window.location.href}`);
      optInResult = await this.foundCmp.optIn();
      enableLogs && console.log(`${this.foundCmp.name}: opt in result ${optInResult}`);
    }

    if (this.config.enablePrehide) {
      undoPrehide();
      this.state.prehideOn = false;
    }

    this.sendContentMessage({
      type: 'optInResult',
      cmp: this.foundCmp ? this.foundCmp.name : 'none',
      result: optInResult,
      scheduleSelfTest: false, // self-tests are only for opt-out at the moment
      url: location.href,
    });

    if (optInResult && !this.foundCmp.isIntermediate) {
      this.sendContentMessage({
        type: 'autoconsentDone',
        cmp: this.foundCmp.name,
        url: location.href,
      });
      this.state.lifecycle = 'done';
    } else {
      this.state.lifecycle = optInResult ? 'optInSuceeded' : 'optInFailed';
    }

    return optInResult;
  }

  async doSelfTest(): Promise<boolean> {
    let selfTestResult;
    if (!this.foundCmp) {
      enableLogs && console.log('no CMP to self test');
      selfTestResult = false;
    } else {
      enableLogs && console.log(`CMP ${this.foundCmp.name}: self-test on ${window.location.href}`);
      selfTestResult = await this.foundCmp.test();
    }

    this.sendContentMessage({
      type: 'selfTestResult',
      cmp: this.foundCmp ? this.foundCmp.name : 'none',
      result: selfTestResult,
      url: location.href,
    });
    return selfTestResult;
  }

  async waitForPopup(cmp: AutoCMP, retries = 5, interval = 500): Promise<boolean> {
    enableLogs && console.log('checking if popup is open...', cmp.name);
    const isOpen = await cmp.detectPopup();
    if (!isOpen && retries > 0) {
      return new Promise((resolve) => setTimeout(() => resolve(this.waitForPopup(cmp, retries - 1, interval)), interval));
    }
    enableLogs && console.log(cmp.name, `popup is ${isOpen ? 'open' : 'not open'}`);
    return isOpen;
  }

  prehideElements(): boolean {
    // hide rules not specific to a single CMP rule
    const globalHidden = [
      "#didomi-popup,.didomi-popup-container,.didomi-popup-notice,.didomi-consent-popup-preferences,#didomi-notice,.didomi-popup-backdrop,.didomi-screen-medium",
    ]

    const selectors = this.rules.reduce((selectorList, rule) => {
      if (rule.prehideSelectors) {
        return [...selectorList, ...rule.prehideSelectors];
      }
      return selectorList;
    }, globalHidden);

    this.state.prehideOn = true
    return prehide(selectors);
  }

  sendReport() {
    this.sendContentMessage({
      type: 'reportResponse',
      instanceId: this.id,
      url: document.location.href,
      mainFrame: window.top === window.self,
      state: this.state,
    })
  }

  async receiveMessageCallback(message: BackgroundMessage) {
    if (enableLogs && message.type !== 'evalResp' /* evals are noisy */) {
      console.log('received from background', message, window.location.href);
    }
    switch (message.type) {
      case 'initResp':
        this.initialize(message.config, message.rules);
        break;
      case 'optIn':
        await this.doOptIn();
        break;
      case 'optOut':
        await this.doOptOut();
        break;
      case 'selfTest':
        await this.doSelfTest();
        break;
      case 'evalResp':
        resolveEval(message.id, message.result);
        break;
      case 'report':
        this.sendReport()
    }
  }
}
