import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cinepuls.com_8wl', ['https://cinepuls.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
