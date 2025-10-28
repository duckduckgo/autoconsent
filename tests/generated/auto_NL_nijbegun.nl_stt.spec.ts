import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nijbegun.nl_stt', ['https://www.nijbegun.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
