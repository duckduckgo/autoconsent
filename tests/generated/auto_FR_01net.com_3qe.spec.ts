import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_01net.com_3qe', ['https://www.01net.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
