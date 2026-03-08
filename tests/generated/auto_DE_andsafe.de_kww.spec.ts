import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_andsafe.de_kww', ['https://andsafe.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
