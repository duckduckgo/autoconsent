import Autoconsent from "../lib/web";
import { DomActions } from "../lib/dom-actions";
import * as rules from '../rules/rules.json';

declare global {
  interface Window {
    Autoconsent: typeof Autoconsent;
    DomActions: typeof DomActions;
    rules: typeof rules;
  }
}

window.Autoconsent = Autoconsent;
window.DomActions = DomActions;
window.rules = rules;
