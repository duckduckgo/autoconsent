import generateCMPTests from '../playwright/runner';

generateCMPTests('eu-cookie-compliance-banner', ['https://publichealth.jhu.edu/', 'https://bibliotheek.be/']);

// categories mode sets cookie-agreed=2 even when only essential cookies are saved
generateCMPTests('eu-cookie-compliance-banner', ['https://www.easa.europa.eu/'], { testSelfTest: false });
