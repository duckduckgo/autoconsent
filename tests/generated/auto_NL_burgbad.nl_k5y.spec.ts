import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_burgbad.nl_k5y', ['https://burgbad.nl/nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
