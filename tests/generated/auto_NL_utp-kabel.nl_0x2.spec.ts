import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_utp-kabel.nl_0x2', ['https://www.utp-kabel.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
