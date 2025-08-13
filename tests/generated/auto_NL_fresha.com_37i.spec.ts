import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_fresha.com_37i', ['https://www.fresha.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
