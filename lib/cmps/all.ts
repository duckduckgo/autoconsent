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
import Axeptio from './axeptio';
import { AutoCMP } from '../types';


const rules: AutoCMP[] = [
  new TrustArcTop(),
  new TrustArcFrame(),
  new CookieBot(),
  new SourcePointTop(),
  new SourcePointFrame(),
  new ConsentManager(),
  new Evidon(),
  new Onetrust(),
  new Axeptio(),
];

export function createAutoCMP(config: AutoConsentCMPRule): AutoConsentCMP {
  return new AutoConsentCMP(config);
}

export default rules;
