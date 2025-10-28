import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_rebuy.nl_wua', ['https://www.rebuy.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
