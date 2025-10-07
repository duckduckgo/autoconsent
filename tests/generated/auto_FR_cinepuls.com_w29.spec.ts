import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cinepuls.com_w29', ['https://cinepuls.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
