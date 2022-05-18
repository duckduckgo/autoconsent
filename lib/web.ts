import Tab from './web/tab';
import handleContentMessage from './web/content';
import detectDialog from './detector';
import { rules as dynamicRules, createAutoCMP } from './index';
import { Browser, MessageSender, AutoCMP, TabActor, RuleBundle } from './types';
import { ConsentOMaticCMP, ConsentOMaticConfig } from './consentomatic/index';
import { AutoConsentCMPRule } from './rules';
import { enableLogs } from './config';
import { ContentScriptMessage, InitResponseMessage } from './messages';
import { prehide, undoPrehide } from './web/content-utils';

export * from './index';
export {
  Tab,
  handleContentMessage,
}

export default class AutoConsent {
  rules: AutoCMP[];
  autoOptOut: boolean;

  constructor(protected browser: Browser, protected sendContentMessage: MessageSender) {
    this.sendContentMessage = sendContentMessage;
    this.rules = [...dynamicRules];
    const initMsg: ContentScriptMessage = {
      type: "init",
    };
    enableLogs && console.groupCollapsed('autoconsent init');
    sendContentMessage(initMsg).then((resp: InitResponseMessage) => {
      enableLogs && console.log("received response", resp, JSON.stringify(resp).length, JSON.stringify(resp));
      if (!resp.enabled) {
        enableLogs && console.log("autoconsent is disabled");
        return;
      }

      this.autoOptOut = resp.autoOptOut;
      this.parseRules(resp.rules);
      if (resp.disabledCmps?.length > 0) {
        this.disableCMPs(resp.disabledCmps);
      }

      enableLogs && console.log("added rules", this.rules);
      this.prehideElements(); // prehide as early as possible to prevent flickering
      enableLogs && console.groupEnd();

      // start detection
      if (document.readyState === 'loading') {
        window.addEventListener('DOMContentLoaded', () => this.start());
      } else {
        this.start();
      }
    });
  }

  parseRules(declarativeRules: RuleBundle) {
    Object.keys(declarativeRules.consentomatic).forEach((name) => {
      // this.addConsentomaticCMP(name, declarativeRules.consentomatic[name]);
    });
    declarativeRules.autoconsent.forEach((rule) => {
      this.addCMP(rule);
    });
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

  // start the detection process
  async start() {
    const cmp = await detectDialog(20, this.rules);
    if (cmp) {
      enableLogs && console.groupCollapsed("detected CMP:", cmp.name);
      const isOpen = await this.waitForPopup(cmp);
      if (!isOpen) {
        enableLogs && console.log('no popup found');
        enableLogs && console.groupEnd();
        undoPrehide();
        return false;
      }

      this.sendContentMessage({ type: 'popupFound' }); // notify the browser
      enableLogs && console.groupEnd();

      if (this.autoOptOut) {
        return await this.doOptOut(cmp);
      }

      return true;
    } else {
      enableLogs && console.log("no CMP found");
      undoPrehide();
      enableLogs && console.groupEnd();
      return false;
    }
  }

  async doOptOut(cmp: AutoCMP): Promise<boolean> {
    enableLogs && console.groupCollapsed(`CMP ${cmp.name}: opt out`);
    const optOut = await cmp.optOut();
    enableLogs && console.groupEnd();
    undoPrehide();
    if (optOut && !!cmp.hasSelfTest) {
      return await cmp.test();
    } else {
      return optOut;
    }
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
}
