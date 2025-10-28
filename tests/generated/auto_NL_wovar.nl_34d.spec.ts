import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_wovar.nl_34d', ['https://www.wovar.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
