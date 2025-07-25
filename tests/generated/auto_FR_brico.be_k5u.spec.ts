import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_brico.be_k5u', ['https://www.brico.be/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
