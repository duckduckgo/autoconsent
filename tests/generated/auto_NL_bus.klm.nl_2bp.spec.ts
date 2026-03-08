import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bus.klm.nl_2bp', ['https://bus.klm.nl/nl'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
