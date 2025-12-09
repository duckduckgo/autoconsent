import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_luckz.nl_6or', ['https://luckz.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
