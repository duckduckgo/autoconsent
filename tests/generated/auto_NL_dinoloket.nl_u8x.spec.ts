import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dinoloket.nl_u8x', ['https://www.dinoloket.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
