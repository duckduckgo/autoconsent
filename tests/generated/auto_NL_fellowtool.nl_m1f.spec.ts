import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_fellowtool.nl_m1f', ['https://fellowtool.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
