import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_zdf.de_lra', ['https://www.zdf.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
