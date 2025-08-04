import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_afflelou.com_71r', ['https://www.afflelou.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
