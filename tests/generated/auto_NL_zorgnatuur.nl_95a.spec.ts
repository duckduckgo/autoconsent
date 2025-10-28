import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_zorgnatuur.nl_95a', ['https://zorgnatuur.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
