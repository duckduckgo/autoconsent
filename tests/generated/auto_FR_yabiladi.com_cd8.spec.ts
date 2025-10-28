import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_yabiladi.com_cd8', ['https://www.yabiladi.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
