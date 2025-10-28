import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_alkmaar.nl_dft', ['https://www.alkmaar.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
