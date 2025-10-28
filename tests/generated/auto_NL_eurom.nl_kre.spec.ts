import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_eurom.nl_kre', ['https://eurom.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
