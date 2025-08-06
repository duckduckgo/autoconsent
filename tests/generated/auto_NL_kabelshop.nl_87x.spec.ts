import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_kabelshop.nl_87x', ['https://www.kabelshop.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
