import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_fresha.com_0n8', ['https://www.fresha.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
