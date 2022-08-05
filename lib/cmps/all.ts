import { AutoConsentCMP } from './base';
import TrustArcTop from './trustarc-top';
import TrustArcFrame from './trustarc-frame';
import CookieBot from './cookiebot';
import SourcePointTop from './sourcepoint-top';
import SourcePointFrame from './sourcepoint-frame';
import ConsentManager from './consentmanager';
import Evidon from './evidon';
import { AutoConsentCMPRule } from '../rules';
import Onetrust from './onetrust';
import { AutoCMP } from '../types';
import Klaro from './klaro';

const rules: AutoCMP[] = [
  new TrustArcTop(),
  new TrustArcFrame(),
  new CookieBot(),
  new SourcePointTop(),
  new SourcePointFrame(),
  new ConsentManager(),
  new Evidon(),
  new Onetrust(),
  new Klaro(),
];

export function createAutoCMP(config: AutoConsentCMPRule): AutoConsentCMP {
  return new AutoConsentCMP(config);
}

export default rules;
