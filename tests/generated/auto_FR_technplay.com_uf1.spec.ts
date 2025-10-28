import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_technplay.com_uf1', ['https://technplay.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
