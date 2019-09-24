import { AutoConsent } from './base';
import Quantcast from './quantcast';
import Optanon from './optanon';
import TheGuardian from './theguardian';
import TagCommander from './tagcommander';
import TrustArc from './trustarc';
import CookieBot from './cookiebot';
import AppGdpr from './appgdpr';
import AppGdpr2 from './appgdpr2';
import Oath from './oath';
import Oil from './oil';
import Future from './future';
import genericRules from './rules';

const rules = [
  new Quantcast(),
  new Optanon(),
  new TheGuardian(),
  new TagCommander(),
  new TrustArc(),
  new CookieBot(),
  new AppGdpr(),
  new Oath(),
  new Oil(),
  new AppGdpr2(),
  new Future(),
];
genericRules.forEach((rule) => {
  rules.push(new AutoConsent(rule));
});

export default rules;
