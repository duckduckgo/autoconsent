import Tab from './web/tab';
import handleContentMessage from './web/content';
import TabConsent from './tabwrapper';
import detectDialog from './detector';
import { rules, createAutoCMP } from './index';
import { Browser, MessageSender, AutoCMP, TabActor } from './types';
import { ConsentOMaticCMP, ConsentOMaticConfig } from './consentomatic/index';
import { AutoConsentCMPRule } from './rules';
import prehideElements from './hider';

export * from './index';
export {
  Tab,
  handleContentMessage,
}

export default class AutoConsent {
  consentFrames: Map<number, any> = new Map()
  tabCmps: Map<number, TabConsent> = new Map()
  rules: AutoCMP[]

  constructor(protected browser: Browser, protected sendContentMessage: MessageSender) {
    this.sendContentMessage = sendContentMessage;
    this.rules = [...rules];
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

  createTab(tabId: number) {
    return new Tab(tabId,
      this.consentFrames.get(tabId),
      this.sendContentMessage,
      this.browser);
  }

  async checkTab(tabId: number, prehide = true) {
    const tab = this.createTab(tabId);
    if (prehide) {
      this.prehideElements(tab);
    }
    const consent = new TabConsent(tab, this.detectDialog(tab, 20));
    this.tabCmps.set(tabId, consent);
    // check tabs
    consent.checked.then((rule) => {
      if (this.consentFrames.has(tabId) && rule) {
        const frame = this.consentFrames.get(tabId);
        if (frame.type === rule.name) {
          consent.tab.frame = frame;
        }
      }
      // no CMP detected, undo hiding
      if (!rule && prehide) {
        tab.undoHideElements();
      }
    });

    return this.tabCmps.get(tabId);
  }

  removeTab(tabId: number) {
    this.tabCmps.delete(tabId);
    this.consentFrames.delete(tabId);
  }

  onFrame({ tabId, url, frameId }: { tabId: number, url: string, frameId: number }) {
    // ignore main frames
    if (frameId === 0) {
      return;
    }
    try {
      const frame = {
        id: frameId,
        url: url,
      };
      const tab = this.createTab(tabId);
      const frameMatch = this.rules.findIndex(r => r.detectFrame(tab, frame));
      if (frameMatch > -1) {
        this.consentFrames.set(tabId, {
          type: this.rules[frameMatch].name,
          url,
          id: frameId,
        });
        if (this.tabCmps.has(tabId)) {
          this.tabCmps.get(tabId).tab.frame = this.consentFrames.get(tabId);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }

  async detectDialog(tab: TabActor, retries: number): Promise<AutoCMP> {
    return detectDialog(tab, retries, this.rules);
  }

  async prehideElements(tab: TabActor): Promise<void> {
    return prehideElements(tab, this.rules);
  }
}
