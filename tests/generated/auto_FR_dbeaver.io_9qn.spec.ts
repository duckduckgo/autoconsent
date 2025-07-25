import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dbeaver.io_9qn', ['https://dbeaver.io/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
