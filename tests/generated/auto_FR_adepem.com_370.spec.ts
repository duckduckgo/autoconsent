import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_adepem.com_370', ['https://www.adepem.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
