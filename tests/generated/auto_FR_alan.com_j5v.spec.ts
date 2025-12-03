import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_alan.com_j5v', ['https://alan.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
