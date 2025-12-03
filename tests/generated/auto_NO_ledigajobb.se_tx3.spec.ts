import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_ledigajobb.se_tx3', ['https://ledigajobb.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
