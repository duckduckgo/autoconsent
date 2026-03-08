import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cxdfrance.com_n17', ['https://cxdfrance.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
