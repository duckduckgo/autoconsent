import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_brico.be_ah6', ['https://www.brico.be/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
