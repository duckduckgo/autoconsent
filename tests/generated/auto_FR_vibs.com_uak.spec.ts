import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_vibs.com_uak', ['https://www.vibs.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
