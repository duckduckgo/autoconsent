import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_brico.be_m25', ['https://www.brico.be/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
