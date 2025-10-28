import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_guidelec.com_21s', ['https://guidelec.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
