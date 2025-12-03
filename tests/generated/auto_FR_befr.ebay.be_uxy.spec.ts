import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_befr.ebay.be_uxy', ['https://www.befr.ebay.be/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
