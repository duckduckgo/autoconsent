import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dbeaver.io_zp2', ['https://dbeaver.io/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
