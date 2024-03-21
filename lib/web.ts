import { MessageSender, AutoCMP, RuleBundle, Config, ConsentState } from './types';
import { ConsentOMaticCMP, ConsentOMaticConfig } from './cmps/consentomatic';
import { AutoConsentCMPRule } from './rules';
import { BackgroundMessage, InitMessage } from './messages';
import { evalState, resolveEval } from './eval-handler';
import { getRandomID } from './random';
import { dynamicCMPs } from './cmps/all';
import { AutoConsentCMP } from './cmps/base';
import { DomActions } from './dom-actions';
import { normalizeConfig } from './utils';

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
  domActions: DomActions;
  protected sendContentMessage: MessageSender;

  constructor(sendContentMessage: MessageSender, config: Partial<Config> = null, declarativeRules: RuleBundle = null) {
    evalState.sendContentMessage = sendContentMessage;
    this.sendContentMessage = sendContentMessage;
    this.rules = [];

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
    this.domActions = new DomActions(this);
  }

  initialize(config: Partial<Config>, declarativeRules: RuleBundle) {
    const normalizedConfig = normalizeConfig(config);
    normalizedConfig.logs.lifecycle && console.log('autoconsent init', window.location.href);
    this.config = normalizedConfig;
    if (!normalizedConfig.enabled) {
      normalizedConfig.logs.lifecycle && console.log("autoconsent is disabled");
      return;
    }

    if (declarativeRules) {
      this.parseDeclarativeRules(declarativeRules);
    }

    this.rules = filterCMPs(this.rules, normalizedConfig);

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
    const logsConfig = this.config.logs;
    logsConfig.lifecycle && console.log(`Detecting CMPs on ${window.location.href}`);
    this.updateState({ lifecycle: 'started' });
    const foundCmps = await this.findCmp(this.config.detectRetries);
    this.updateState({ detectedCmps: foundCmps.map(c => c.name) });
    if (foundCmps.length === 0) {
      logsConfig.lifecycle && console.log("no CMP found", location.href);
      if (this.config.enablePrehide) {
        this.undoPrehide();
      }
      this.updateState({ lifecycle: 'nothingDetected' });
      return false;
    }
    this.updateState({ lifecycle: 'cmpDetected' });

    // we resort to cosmetic rules only if no non-cosmetic rules are found
    const staticCmps: AutoCMP[] = []
    const cosmeticCmps: AutoCMP[] = []

    for (const cmp of foundCmps) {
      if (cmp.isCosmetic) {
        cosmeticCmps.push(cmp)
      } else {
        staticCmps.push(cmp)
      }
    }

    let result = false

    let foundPopups = await this.detectPopups(staticCmps, async cmp => { result = await this.handlePopup(cmp) })
    if (foundPopups.length === 0) {
      foundPopups = await this.detectPopups(cosmeticCmps, async cmp => { result = await this.handlePopup(cmp) })
    }

    if (foundPopups.length === 0) {
      logsConfig.lifecycle && console.log('no popup found');
      if (this.config.enablePrehide) {
        this.undoPrehide();
      }
      return false;
    }

    if (foundPopups.length > 1) {
      const errorDetails = {
        msg: `Found multiple CMPs, check the detection rules.`,
        cmps: foundPopups.map((cmp) => cmp.name),
      };
      logsConfig.errors && console.warn(errorDetails.msg, errorDetails.cmps);
      this.sendContentMessage({
        type: 'autoconsentError',
        details: errorDetails,
      });
    }

    return result
  }

  async findCmp(retries: number): Promise<AutoCMP[]> {
    const logsConfig = this.config.logs;
    this.updateState({ findCmpAttempts: this.state.findCmpAttempts + 1 })
    const foundCMPs: AutoCMP[] = [];

    for (const cmp of this.rules) {
      try {
        if (!cmp.checkRunContext()) {
          continue;
        }
        const result = await cmp.detectCmp();
        if (result) {
          logsConfig.lifecycle && console.log(`Found CMP: ${cmp.name} ${window.location.href}`);
          this.sendContentMessage({
            type: 'cmpDetected',
            url: location.href,
            cmp: cmp.name,
          }); // notify the browser
          foundCMPs.push(cmp);
        }
      } catch (e) {
        logsConfig.errors && console.warn(`error detecting ${cmp.name}`, e);
      }
    }

    if (foundCMPs.length === 0 && retries > 0) {
      await this.domActions.wait(500);
      return this.findCmp(retries - 1);
    }

    return foundCMPs;
  }

  /**
   * Detect if a CMP has a popup open. Fullfils with the CMP if a popup is open, otherwise rejects.
   */
  async detectPopup(cmp: AutoCMP): Promise<AutoCMP> {
    const isOpen = await this.waitForPopup(cmp).catch(error => {
      this.config.logs.errors && console.warn(`error waiting for a popup for ${cmp.name}`, error);
      return false;
    });

    if (isOpen) {
      this.updateState({ detectedPopups: this.state.detectedPopups.concat([cmp.name]) });
      this.sendContentMessage({
        type: 'popupFound',
        cmp: cmp.name,
        url: location.href,
      }); // notify the browser
      return cmp;
    }
    throw new Error('Popup is not shown');
  }

  /**
   * Detect if any of the CMPs has a popup open. Returns a list of CMPs with open popups.
   */
  async detectPopups(cmps: AutoCMP[], onFirstPopupAppears: (cmp: AutoCMP) => Promise<unknown>) {
    const tasks = cmps.map(
      cmp => this.detectPopup(cmp)
    );

    await Promise.any(tasks)
      .then(cmp => {
        onFirstPopupAppears(cmp)
      })
      .catch(() => null)

    const results = await Promise.allSettled(tasks)
    const popups: AutoCMP[] = []

    for (const result of results) {
      if (result.status === 'fulfilled') {
        popups.push(result.value)
      }
    }

    return popups
  }

  async handlePopup(cmp: AutoCMP): Promise<boolean> {
    this.updateState({ lifecycle: 'openPopupDetected' });
    if (this.config.enablePrehide && !this.state.prehideOn) { // prehide might have timeouted by this time, apply it again
      this.prehideElements();
    }

    this.foundCmp = cmp;

    if (this.config.autoAction === 'optOut') {
      return await this.doOptOut();
    } else if (this.config.autoAction === 'optIn') {
      return await this.doOptIn();
    } else {
      this.config.logs.lifecycle && console.log("waiting for opt-out signal...", location.href);
      return true;
    }
  }

  async doOptOut(): Promise<boolean> {
    const logsConfig = this.config.logs;
    this.updateState({ lifecycle: 'runningOptOut' })
    let optOutResult;
    if (!this.foundCmp) {
      logsConfig.errors && console.log('no CMP to opt out');
      optOutResult = false;
    } else {
      logsConfig.lifecycle && console.log(`CMP ${this.foundCmp.name}: opt out on ${window.location.href}`);
      optOutResult = await this.foundCmp.optOut();
      logsConfig.lifecycle && console.log(`${this.foundCmp.name}: opt out result ${optOutResult}`);
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
    const logsConfig = this.config.logs;
    this.updateState({ lifecycle: 'runningOptIn' })
    let optInResult;
    if (!this.foundCmp) {
      logsConfig.errors && console.log('no CMP to opt in');
      optInResult = false;
    } else {
      logsConfig.lifecycle && console.log(`CMP ${this.foundCmp.name}: opt in on ${window.location.href}`);
      optInResult = await this.foundCmp.optIn();
      logsConfig.lifecycle && console.log(`${this.foundCmp.name}: opt in result ${optInResult}`);
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
    const logsConfig = this.config.logs;
    let selfTestResult;
    if (!this.foundCmp) {
      logsConfig.errors && console.log('no CMP to self test');
      selfTestResult = false;
    } else {
      logsConfig.lifecycle && console.log(`CMP ${this.foundCmp.name}: self-test on ${window.location.href}`);
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
    const logsConfig = this.config.logs;
    logsConfig.lifecycle && console.log('checking if popup is open...', cmp.name);
    const isOpen = await cmp.detectPopup().catch((e) => {
      logsConfig.errors && console.warn(`error detecting popup for ${cmp.name}`, e);
      return false;
    }); // ignore possible errors in one-time popup detection
    if (!isOpen && retries > 0) {
      await this.domActions.wait(interval);
      return this.waitForPopup(cmp, retries - 1, interval);
    }
    logsConfig.lifecycle && console.log(cmp.name, `popup is ${isOpen ? 'open' : 'not open'}`);
    return isOpen;
  }

  prehideElements(): boolean {
    const logsConfig = this.config.logs;
    // hide rules not specific to a single CMP rule
    const globalHidden = [
      "#didomi-popup,.didomi-popup-container,.didomi-popup-notice,.didomi-consent-popup-preferences,#didomi-notice,.didomi-popup-backdrop,.didomi-screen-medium",
    ]

    const selectors = this.rules
      .filter(rule => rule.prehideSelectors && rule.checkRunContext())
      .reduce((selectorList, rule) => 
        [...selectorList, ...rule.prehideSelectors], globalHidden);

    this.updateState({ prehideOn: true })
    setTimeout(() => {
      // unhide things if we are still looking for a pop-up
      if (
        this.config.enablePrehide &&
        this.state.prehideOn &&
        !['runningOptOut', 'runningOptIn'].includes(this.state.lifecycle)
      ) {
        logsConfig.lifecycle && console.log('Process is taking too long, unhiding elements');
        this.undoPrehide();
      }
    }, this.config.prehideTimeout || 2000);
    return this.domActions.prehide(selectors.join(','));
  }

  undoPrehide(): boolean {
    this.updateState({ prehideOn: false })
    return this.domActions.undoPrehide();
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
    const logsConfig = this.config?.logs;
    if (logsConfig?.messages) {
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
