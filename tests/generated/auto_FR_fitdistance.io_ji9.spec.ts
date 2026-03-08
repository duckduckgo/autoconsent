import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fitdistance.io_ji9', ['https://fitdistance.io/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
