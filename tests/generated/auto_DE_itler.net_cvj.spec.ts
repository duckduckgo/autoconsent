import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_itler.net_cvj', ['https://itler.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
