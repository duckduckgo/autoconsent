import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_rmo.nl_abu', ['https://www.rmo.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
