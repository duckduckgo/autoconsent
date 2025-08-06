import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_chillplanet.nl_vmh', ['https://chillplanet.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
