import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nl.norton.com_sm3', ['https://nl.norton.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
