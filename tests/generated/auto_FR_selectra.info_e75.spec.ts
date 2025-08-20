import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_selectra.info_e75', ['https://selectra.info/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
