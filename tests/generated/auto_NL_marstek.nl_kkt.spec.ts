import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_marstek.nl_kkt', ['https://www.marstek.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
