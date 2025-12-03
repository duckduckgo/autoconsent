import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_rathenau.nl_wo1', ['https://www.rathenau.nl/nl'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
