import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_mac4ever.com_q0p', ['https://www.mac4ever.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
