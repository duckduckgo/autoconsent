import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_lexima.nl_7sy', ['https://lexima.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
