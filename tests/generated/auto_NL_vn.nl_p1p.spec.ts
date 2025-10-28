import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vn.nl_p1p', ['https://www.vn.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
