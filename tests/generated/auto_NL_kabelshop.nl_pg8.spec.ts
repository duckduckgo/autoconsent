import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_kabelshop.nl_pg8', ['https://www.kabelshop.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
