import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_acta.nl_fc1', ['https://acta.nl/nl'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
