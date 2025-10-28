import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_roco.cc_9x3', ['https://www.roco.cc/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
