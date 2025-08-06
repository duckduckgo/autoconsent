import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_kayak.nl_4cf', ['https://www.kayak.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
