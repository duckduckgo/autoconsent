import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_curio.nl_syk', ['https://www.curio.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
