import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_eurom.nl_tas', ['https://eurom.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
