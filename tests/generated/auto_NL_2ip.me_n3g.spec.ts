import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_2ip.me_n3g', ['https://2ip.me/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
