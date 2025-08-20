import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_chillplanet.nl_xcp', ['https://chillplanet.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
