import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_juf-milou.nl_dua', ['https://www.juf-milou.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
