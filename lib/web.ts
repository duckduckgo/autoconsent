import { MessageSender, AutoCMP, RuleBundle, Config, ConsentState } from './types';
import { ConsentOMaticCMP, ConsentOMaticConfig } from './cmps/consentomatic';
import { AutoConsentCMPRule } from './rules';
import { enableLogs } from './config';
import { BackgroundMessage, InitMessage } from './messages';
import { prehide, undoPrehide, wait } from './rule-executors';
import { evalState, resolveEval } from './eval-handler';
import { getRandomID } from './random';
import { dynamicCMPs } from './cmps/all';
import { AutoConsentCMP } from './cmps/base';

function filterCMPs(rules: AutoCMP[], config: Config) {
  return rules.filter((cmp) => {
    return (
      (!config.disabledCmps || !config.disabledCmps.includes(cmp.name)) // CMP is not disabled
      &&
      (config.enableCosmeticRules || !cmp.isCosmetic) // CMP is not cosmetic or cosmetic rules are enabled
    );
  });
}

export default class AutoConsent {
  id = getRandomID();
  rules: AutoCMP[] = [];
  config: Config;
  foundCmp: AutoCMP = null;
  state: ConsentState = {
    lifecycle: 'loading',
    prehideOn: false,
    findCmpAttempts: 0,
    detectedCmps: [],
    detectedPopups: [],
    selfTest: null,
  };
  protected sendContentMessage: MessageSender;

  constructor(sendContentMessage: MessageSender, config: Config = null, declarativeRules: RuleBundle = null) {
    evalState.sendContentMessage = sendContentMessage;
    this.sendContentMessage = sendContentMessage;
    this.rules = [];

    enableLogs && console.log('autoconsent init', window.location.href);
    this.updateState({ lifecycle: 'loading' });

    this.addDynamicRules();
    if (config) {
      this.initialize(config, declarativeRules);
    } else {
      if (declarativeRules) {
        this.parseDeclarativeRules(declarativeRules);
      }
      const initMsg: InitMessage = {
        type: "init",
        url: window.location.href,
      };
      sendContentMessage(initMsg);
      this.updateState({ lifecycle: 'waitingForInitResponse' });
    }
  }

  initialize(config: Config, declarativeRules: RuleBundle) {
    this.config = config;
    if (!config.enabled) {
      enableLogs && console.log("autoconsent is disabled");
      return;
    }

    if (declarativeRules) {
      this.parseDeclarativeRules(declarativeRules);
    }

    this.rules = filterCMPs(this.rules, config);

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
    this.updateState({ lifecycle: 'initialized' });
  }

  addDynamicRules() {
    dynamicCMPs.forEach((cmp) => {
      this.rules.push(new cmp(this));
    });
  }

  parseDeclarativeRules(declarativeRules: RuleBundle) {
    Object.keys(declarativeRules.consentomatic).forEach((name) => {
      this.addConsentomaticCMP(name, declarativeRules.consentomatic[name]);
    });
    declarativeRules.autoconsent.forEach((ruleset) => {
      this.addDeclarativeCMP(ruleset);
    });
    enableLogs && console.log("added rules", this.rules);
  }

  addDeclarativeCMP(ruleset: AutoConsentCMPRule) {
    this.rules.push(new AutoConsentCMP(ruleset, this));
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
    enableLogs && console.log(`Detecting CMPs on ${window.location.href}`);
    this.updateState({ lifecycle: 'started' });
    const foundCmps = await this.findCmp(this.config.detectRetries);
    this.updateState({ detectedCmps: foundCmps.map(c => c.name) });
    if (foundCmps.length === 0) {
      enableLogs && console.log("no CMP found", location.href);
      if (this.config.enablePrehide) {
        this.undoPrehide();
      }
      this.updateState({ lifecycle: 'nothingDetected' });
      return false;
    }
    this.updateState({ lifecycle: 'cmpDetected' });

    // we resort to cosmetic rules only if no non-cosmetic rules are found
    let foundPopups = await this.detectPopups(foundCmps.filter(r => !r.isCosmetic))
    if (foundPopups.length === 0) {
      foundPopups = await this.detectPopups(foundCmps.filter(r => r.isCosmetic))
    }

    if (foundPopups.length === 0) {
      enableLogs && console.log('no popup found');
      if (this.config.enablePrehide) {
        this.undoPrehide();
      }
      return false;
    }
    this.updateState({ lifecycle: 'openPopupDetected' });

    if (foundPopups.length > 1) {
      const errorDetails = {
        msg: `Found multiple CMPs, check the detection rules.`,
        cmps: foundPopups.map((cmp) => cmp.name),
      };
      enableLogs && console.warn(errorDetails.msg, errorDetails.cmps);
      this.sendContentMessage({
        type: 'autoconsentError',
        details: errorDetails,
      });
    }

    this.foundCmp = foundPopups[0];

    if (this.config.autoAction === 'optOut') {
      return await this.doOptOut();
    } else if (this.config.autoAction === 'optIn') {
      return await this.doOptIn();
    } else {
      enableLogs && console.log("waiting for opt-out signal...", location.href);
      return true;
    }
  }

  async findCmp(retries: number): Promise<AutoCMP[]> {
    this.updateState({ findCmpAttempts: this.state.findCmpAttempts + 1 })
    const foundCMPs: AutoCMP[] = [];

    for (const cmp of this.rules) {
      try {
        if (!cmp.checkRunContext()) {
          continue;
        }
        const result = await cmp.detectCmp();
        if (result) {
          enableLogs && console.log(`Found CMP: ${cmp.name} ${window.location.href}`);
          this.sendContentMessage({
            type: 'cmpDetected',
            url: location.href,
            cmp: cmp.name,
          }); // notify the browser
          foundCMPs.push(cmp);
        }
      } catch (e) {
        enableLogs && console.warn(`error detecting ${cmp.name}`, e);
      }
    }

    if (foundCMPs.length === 0 && retries > 0) {
      await wait(500);
      return this.findCmp(retries - 1);
    }

    return foundCMPs;
  }

  async detectPopups(cmps: AutoCMP[]): Promise<AutoCMP[]> {
    const result: AutoCMP[] = [];
    const popupLookups = cmps.map((cmp) => this.waitForPopup(cmp).then((isOpen) => {
      if (isOpen) {
        this.updateState({ detectedPopups: this.state.detectedPopups.concat([cmp.name]) });
        this.sendContentMessage({
          type: 'popupFound',
          cmp: cmp.name,
          url: location.href,
        }); // notify the browser
        result.push(cmp);
      }
    }).catch((e) => {
      enableLogs && console.warn(`error waiting for a popup for ${cmp.name}`, e);
      return null
    }));
    await Promise.all(popupLookups);
    return result;
  }

  async doOptOut(): Promise<boolean> {
    this.updateState({ lifecycle: 'runningOptOut' })
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
      this.undoPrehide();
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
        isCosmetic: this.foundCmp.isCosmetic,
        url: location.href,
      });
      this.updateState({ lifecycle: 'done' })
    } else {
      this.updateState({ lifecycle: optOutResult ? 'optOutSucceeded' : 'optOutFailed' })
    }

    return optOutResult;
  }

  async doOptIn(): Promise<boolean> {
    this.updateState({ lifecycle: 'runningOptIn' })
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
      this.undoPrehide();
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
        isCosmetic: this.foundCmp.isCosmetic,
        url: location.href,
      });
      this.updateState({ lifecycle: 'done' })
    } else {
      this.updateState({ lifecycle: optInResult ? 'optInSucceeded' : 'optInFailed' })
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
    this.updateState({ selfTest: selfTestResult })
    return selfTestResult;
  }

  async waitForPopup(cmp: AutoCMP, retries = 5, interval = 500): Promise<boolean> {
    enableLogs && console.log('checking if popup is open...', cmp.name);
    const isOpen = await cmp.detectPopup().catch((e) => {
      enableLogs && console.warn(`error detecting popup for ${cmp.name}`, e);
      return false;
    }); // ignore possible errors in one-time popup detection
    if (!isOpen && retries > 0) {
      await wait(interval);
      return this.waitForPopup(cmp, retries - 1, interval);
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

    this.updateState({ prehideOn: true })
    setTimeout(() => {
      // unhide things if we are still looking for a pop-up
      if (
        this.config.enablePrehide &&
        this.state.prehideOn &&
        !['runningOptOut', 'runningOptIn'].includes(this.state.lifecycle)
      ) {
        enableLogs && console.log('Process is taking too long, unhiding elements');
        this.undoPrehide();
      }
    }, this.config.prehideTimeout || 2000);
    return prehide(selectors);
  }

  undoPrehide(): boolean {
    this.updateState({ prehideOn: false })
    return undoPrehide();
  }

  updateState(change: Partial<ConsentState>) {
    Object.assign(this.state, change)
    this.sendContentMessage({
      type: 'report',
      instanceId: this.id,
      url: window.location.href,
      mainFrame: window.top === window.self,
      state: this.state,
    })
  }

  async receiveMessageCallback(message: BackgroundMessage) {
    if (enableLogs && ['evalResp', 'report'].includes(message.type) /* evals are noisy */) {
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
    }
  }
}
