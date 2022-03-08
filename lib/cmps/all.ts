import { AutoConsent } from './base';
import TrustArc from './trustarc';
import CookieBot from './cookiebot';
import SourcePoint from './sourcepoint';
import ContentManager from './consentmanager';
import Evidon from './evidon';
import Facebook from './facebook';
import Instagram from './instagram';
import { AutoConsentCMPRule } from '../rules';

const rules = [
  new TrustArc(),
  new CookieBot(),
  new SourcePoint(),
  new ContentManager(),
  new Evidon(),
  new Facebook(),
  new Instagram(),
];

export function createAutoCMP(config: AutoConsentCMPRule): AutoConsent {
  return new AutoConsent(config);
}

export default rules;
