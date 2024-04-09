import { RunContext } from "../rules";
import AutoConsentCMPBase from "./base";
import { FiltersEngine } from '@cliqz/adblocker';
import * as easylist from '../../rules/easylist.json';
import { parse as tldtsParse } from 'tldts-experimental';
import { getStyleElement } from "../utils";
import { extractFeaturesFromDOM } from '@cliqz/adblocker-content';

export default class EasyList extends AutoConsentCMPBase {
  name = "easylist";
  runContext: RunContext = {};
  prehideSelectors: string[] = [];
  engine: FiltersEngine;
  selectorsOnly: string = '';

  get hasSelfTest(): boolean {
    return false;
  }

  get isIntermediate(): boolean {
    return false;
  }

  get isCosmetic(): boolean {
    return true;
  }

  async detectCmp() {
    this.engine = FiltersEngine.parse(easylist.content, {
      enableMutationObserver: false,
      loadNetworkFilters: false,
      enableHtmlFiltering: false,
      loadCSPFilters: false,
    });
    const parsed = tldtsParse(location.href);
    const hostname = parsed.hostname || '';
    const domain = parsed.domain || '';

    const cosmetics = this.engine.getCosmeticsFilters({
      url: location.href,
      hostname,
      domain,

      ...extractFeaturesFromDOM([document.documentElement]),

      getBaseRules: true,
      getInjectionRules: true,
      getExtendedRules: true,
      getRulesFromDOM: true,
      getRulesFromHostname: true,
    })

    if (cosmetics.styles) {
      this.selectorsOnly = cosmetics.styles.replace(/\s*{ display: none !important; }\s*/g, ',').replace(/,$/, '');
      return this.elementExists(this.selectorsOnly);
    }

    return false;
  }

  async detectPopup() {
    return true; // detectCMP already does what we want
  }

  async optOut() {
    const styleEl = getStyleElement();
    styleEl.innerText += `${this.selectorsOnly} { display: none !important; }`;
    return true;
  }

  async optIn() {
    return true;
  }
}
