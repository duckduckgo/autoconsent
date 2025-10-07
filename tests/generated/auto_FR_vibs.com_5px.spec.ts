import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_vibs.com_5px', ['https://www.vibs.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
