import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_selectra.info_d9t', ['https://selectra.info/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
