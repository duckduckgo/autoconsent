import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cinepuls.com_0i1', ['https://cinepuls.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
