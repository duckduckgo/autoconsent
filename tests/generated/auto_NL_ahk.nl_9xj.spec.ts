import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ahk.nl_9xj', ['https://www.ahk.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
