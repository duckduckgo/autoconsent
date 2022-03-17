import { AutoConsent } from './base';
import TrustArc from './trustarc';
import CookieBot from './cookiebot';
import SourcePoint from './sourcepoint';
import ContentManager from './consentmanager';
import Evidon from './evidon';
import { AutoConsentCMPRule } from '../rules';

const rules = [
  new TrustArc(),
  new CookieBot(),
  new SourcePoint(),
  new ContentManager(),
  new Evidon(),
];

export function createAutoCMP(config: AutoConsentCMPRule): AutoConsent {
  return new AutoConsent(config);
}

export default rules;
