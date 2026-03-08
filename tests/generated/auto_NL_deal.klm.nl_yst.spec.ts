import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_deal.klm.nl_yst', ['https://deal.klm.nl/nl'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
