import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dbeaver.io_7zt', ['https://dbeaver.io/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
