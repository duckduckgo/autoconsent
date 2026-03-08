import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_detoyboys.nl_xv6', ['https://detoyboys.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
