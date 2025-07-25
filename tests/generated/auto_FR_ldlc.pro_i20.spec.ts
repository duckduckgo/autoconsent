import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ldlc.pro_i20', ['https://www.ldlc.pro/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
