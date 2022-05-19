import { rules as dynamicRules, createAutoCMP } from './index';
import { MessageSender, AutoCMP, RuleBundle, Config } from './types';
import { ConsentOMaticCMP, ConsentOMaticConfig } from './consentomatic/index';
import { AutoConsentCMPRule } from './rules';
import { enableLogs } from './config';
import { BackgroundMessage, InitMessage } from './messages';
import { prehide, undoPrehide } from './web/content-utils';

export * from './index';

export default class AutoConsent {
  rules: AutoCMP[] = [];
  config: Config;
  foundCmp: AutoCMP = null;
  protected sendContentMessage: MessageSender;

  constructor(sendContentMessage: MessageSender, config: Config = null, declarativeRules: RuleBundle = null) {
    this.sendContentMessage = sendContentMessage;
    this.rules = [...dynamicRules];

    if (config) {
      this.initialize(config, declarativeRules);
    }

    const initMsg: InitMessage = {
      type: "init",
    };
    enableLogs && console.log('autoconsent init', window.location.href);
    sendContentMessage(initMsg);
  }

  initialize(config: Config, declarativeRules: RuleBundle) {
    this.config = config;
    if (!config.enabled) {
      enableLogs && console.log("autoconsent is disabled");
      return;
    }

    this.parseRules(declarativeRules);
    if (config.disabledCmps?.length > 0) {
      this.disableCMPs(config.disabledCmps);
    }

    if (config.autoAction) {
      this.prehideElements(); // prehide as early as possible to prevent flickering
    }

    // start detection
    if (document.readyState === 'loading') {
      window.addEventListener('DOMContentLoaded', () => this.start());
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

  disableCMPs(cmpNames: String[]) {
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
    enableLogs && console.groupCollapsed(`Detecting CMPs on ${window.location.href}`)
    const cmp = await this.findCmp(20);
    enableLogs && console.groupEnd();
    if (cmp) {
      enableLogs && console.groupCollapsed("detected CMP:", cmp.name, window.location.href);
      const isOpen = await this.waitForPopup(cmp);
      if (!isOpen) {
        enableLogs && console.log('no popup found');
        enableLogs && console.groupEnd();
        if (this.config.autoAction) {
          undoPrehide();
        }
        return false;
      }

      this.foundCmp = cmp;
      this.sendContentMessage({
        type: 'popupFound',
        cmp: cmp.name,
      }); // notify the browser
      enableLogs && console.groupEnd();

      if (this.config.autoAction === 'optOut') {
        return await this.doOptOut(cmp);
      } else if (this.config.autoAction === 'optIn') {
        return await this.doOptIn(cmp);
      }

      enableLogs && console.log("waiting for opt-out signal...");
      return true;
    } else {
      enableLogs && console.log("no CMP found");
      if (this.config.autoAction) {
        undoPrehide();
      }
      enableLogs && console.groupEnd();
      return false;
    }
  }

  async findCmp(retries: number): Promise<AutoCMP> {
    enableLogs && console.groupCollapsed(`retries = ${retries}...`)

    let foundCmp: AutoCMP = null;

    for (const cmp of this.rules) {
      try {
        const result = await cmp.detectCmp();
        if (result) {
          enableLogs && console.log(`Found CMP: ${cmp.name}`);
          foundCmp = cmp;
          break;
        }
      } catch (e) {
        enableLogs && console.error(`error detecting ${cmp.name}`);
      }
    }

    enableLogs && console.groupEnd();
    if (!foundCmp && retries > 0) {
      return new Promise((resolve) => {
        setTimeout(async () => {
          const result = this.findCmp(retries - 1);
          resolve(result);
        }, 500);
      });
    }

    return foundCmp;
  }

  async doOptOut(cmp: AutoCMP): Promise<boolean> {
    enableLogs && console.groupCollapsed(`CMP ${cmp.name}: opt out on ${window.location.href}`);
    let optOutResult = await cmp.optOut();
    enableLogs && console.groupEnd();
    if (this.config.autoAction) {
      undoPrehide();
    }
    if (optOutResult && !!cmp.hasSelfTest) {
      optOutResult = await cmp.test();
    }

    this.sendContentMessage({
      type: 'optOutResult',
      result: optOutResult,
    });

    this.foundCmp = null; // to prevent double opt-out
    return optOutResult;
  }

  async doOptIn(cmp: AutoCMP): Promise<boolean> {
    enableLogs && console.groupCollapsed(`CMP ${cmp.name}: opt in on ${window.location.href}`);
    let optInResult = await cmp.optIn();
    enableLogs && console.groupEnd();
    if (this.config.autoAction) {
      undoPrehide();
    }

    this.sendContentMessage({
      type: 'optInResult',
      result: optInResult,
    });

    this.foundCmp = null; // to prevent double opt-out
    return optInResult;
  }

  async selfTest(cmp: AutoCMP): Promise<boolean> {
    const selfTestResult = await cmp.test();
    this.sendContentMessage({
      type: 'selfTestResult',
      result: selfTestResult,
    });
    return selfTestResult;
  }

  async waitForPopup(cmp: AutoCMP, retries = 5, interval = 500): Promise<boolean> {
    enableLogs && console.log('checking if popup is open...', cmp.name);
    const isOpen = await cmp.detectPopup();
    if (!isOpen && retries > 0) {
      return new Promise((resolve) => setTimeout(() => resolve(this.waitForPopup(cmp, retries - 1, interval)), interval));
    }
    enableLogs && console.log(`popup is ${isOpen ? 'open' : 'not open'}`);
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

    enableLogs && console.log('prehiding elements', selectors);

    return prehide(selectors);
  }

  async receiveMessageCallback(message: BackgroundMessage) {
    enableLogs && console.log('received from background', message, window.location.href);
    switch (message.type) {
      case 'initResp':
        this.initialize(message.config, message.rules);
        break;
      case 'optOut':
        if (this.foundCmp) {
          await this.doOptOut(this.foundCmp);
        } else {
          enableLogs && console.log('no CMP to opt out');
        }
        break;
      case 'selfTest':
        this
        break;
    }
  }
}
