import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_afflelou.com_w1r', ['https://www.afflelou.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
