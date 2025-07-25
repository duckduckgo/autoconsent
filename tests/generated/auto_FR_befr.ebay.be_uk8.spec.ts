import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_befr.ebay.be_uk8', ['https://www.befr.ebay.be/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
