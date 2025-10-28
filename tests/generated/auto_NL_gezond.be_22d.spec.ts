import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_gezond.be_22d', ['https://gezond.be/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
