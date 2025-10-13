import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_curio.nl_9z7', ['https://www.curio.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
