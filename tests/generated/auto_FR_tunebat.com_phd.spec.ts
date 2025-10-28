import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_tunebat.com_phd', ['https://tunebat.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
