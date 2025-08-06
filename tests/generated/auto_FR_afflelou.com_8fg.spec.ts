import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_afflelou.com_8fg', ['https://www.afflelou.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
