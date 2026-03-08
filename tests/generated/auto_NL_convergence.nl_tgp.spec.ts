import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_convergence.nl_tgp', ['https://convergence.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
