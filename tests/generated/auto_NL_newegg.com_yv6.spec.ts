import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_newegg.com_yv6', ['https://www.newegg.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
