import { AutoConsentCMP } from './base';
import TrustArcTop from './trustarc-top';
import TrustArcFrame from './trustarc-frame';
import CookieBot from './cookiebot';
// import SourcePoint from './sourcepoint';
import ConsentManager from './consentmanager';
// import Evidon from './evidon';
import { AutoConsentCMPRule } from '../rules';
import Onetrust from './onetrust';
import { AutoCMP } from '../types';

const rules: AutoCMP[] = [
  new TrustArcTop(),
  new TrustArcFrame(),
  new CookieBot(),
  // new SourcePoint(),
  new ConsentManager(),
  // new Evidon(),
  new Onetrust(),
];

export function createAutoCMP(config: AutoConsentCMPRule): AutoConsentCMP {
  return new AutoConsentCMP(config);
}

export default rules;
