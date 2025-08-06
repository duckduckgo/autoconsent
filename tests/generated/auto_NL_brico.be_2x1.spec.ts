import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_brico.be_2x1', ['https://www.brico.be/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
