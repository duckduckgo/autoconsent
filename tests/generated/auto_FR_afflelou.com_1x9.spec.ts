import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_afflelou.com_1x9', ['https://www.afflelou.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
