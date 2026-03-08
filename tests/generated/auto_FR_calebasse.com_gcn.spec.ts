import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_calebasse.com_gcn', ['https://calebasse.com/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
