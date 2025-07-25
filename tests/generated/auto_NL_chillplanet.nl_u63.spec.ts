import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_chillplanet.nl_u63', ['https://chillplanet.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
