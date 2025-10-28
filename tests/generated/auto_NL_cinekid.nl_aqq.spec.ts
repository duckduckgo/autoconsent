import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_cinekid.nl_aqq', ['https://cinekid.nl/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
