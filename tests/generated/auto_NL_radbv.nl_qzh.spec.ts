import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_radbv.nl_qzh', ['https://www.radbv.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
