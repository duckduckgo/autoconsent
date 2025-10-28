import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_slimster.nl_pkd', ['https://slimster.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
