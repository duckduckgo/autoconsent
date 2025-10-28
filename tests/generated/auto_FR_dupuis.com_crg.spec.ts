import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dupuis.com_crg', ['https://www.dupuis.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
