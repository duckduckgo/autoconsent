import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_domomat.com_eez', ['https://www.domomat.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
