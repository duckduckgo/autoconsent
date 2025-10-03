import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dinoloket.nl_lmi', ['https://www.dinoloket.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
