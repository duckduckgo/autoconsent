import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_duntep.nl_9tm', ['https://duntep.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
