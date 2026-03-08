import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_flysupply.nl_4eh', ['https://flysupply.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
