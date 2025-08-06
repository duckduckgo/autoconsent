import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_brico.be_b16', ['https://www.brico.be/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
