import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_solow.nl_x49', ['https://solow.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
