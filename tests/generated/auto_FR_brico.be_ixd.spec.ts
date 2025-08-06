import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_brico.be_ixd', ['https://www.brico.be/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
