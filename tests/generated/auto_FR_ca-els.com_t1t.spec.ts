import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ca-els.com_t1t', ['https://www.ca-els.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
