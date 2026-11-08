import generateCMPTests from '../playwright/runner';

generateCMPTests('cookie-consent-by-you', ['https://psykiatriker.se/', 'https://psykiater.no/', 'https://doktorakram.no/'], {});
