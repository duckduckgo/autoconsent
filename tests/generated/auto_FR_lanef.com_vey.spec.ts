import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lanef.com_vey', ['https://www.lanef.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
