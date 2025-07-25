import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_strato.nl_jhh', ['https://www.strato.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
