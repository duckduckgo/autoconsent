import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lepropane.com_s9c', ['https://lepropane.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
