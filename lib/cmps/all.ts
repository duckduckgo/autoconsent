import { AutoConsent } from './base';
import TagCommander from './tagcommander';
import TrustArc from './trustarc';
import CookieBot from './cookiebot';
import AppGdpr from './appgdpr';
import Future from './future';
import SourcePoint from './sourcepoint';
import { AutoConsentCMPRule } from '../rules';

const rules = [
  new TagCommander(),
  new TrustArc(),
  new CookieBot(),
  new AppGdpr(),
  new Future(),
  new SourcePoint(),
];

export function createAutoCMP(config: AutoConsentCMPRule): AutoConsent {
  return new AutoConsent(config);
}

export default rules;
