import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_iserv.de_xrb', ['https://iserv.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
