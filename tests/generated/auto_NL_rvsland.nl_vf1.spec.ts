import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_rvsland.nl_vf1', ['https://rvsland.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
