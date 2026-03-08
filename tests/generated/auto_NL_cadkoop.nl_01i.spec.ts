import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_cadkoop.nl_01i', ['https://cadkoop.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
