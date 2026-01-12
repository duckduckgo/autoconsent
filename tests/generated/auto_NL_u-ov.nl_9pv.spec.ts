import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_u-ov.nl_9pv', ['https://www.u-ov.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
