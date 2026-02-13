import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hetcak.nl_3bh', ['https://www.hetcak.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
