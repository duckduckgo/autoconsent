import { AutoConsent } from './base';
import TrustArc from './trustarc';
import CookieBot from './cookiebot';
import AppGdpr from './appgdpr';
import SourcePoint from './sourcepoint';
import ContentManager from './consentmanager';
import { AutoConsentCMPRule } from '../rules';

const rules = [
  new TrustArc(),
  new CookieBot(),
  new AppGdpr(),
  new SourcePoint(),
  new ContentManager(),
];

export function createAutoCMP(config: AutoConsentCMPRule): AutoConsent {
  return new AutoConsent(config);
}

export default rules;
