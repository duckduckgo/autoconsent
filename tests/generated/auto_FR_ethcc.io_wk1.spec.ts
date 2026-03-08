import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ethcc.io_wk1', ['https://ethcc.io/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
