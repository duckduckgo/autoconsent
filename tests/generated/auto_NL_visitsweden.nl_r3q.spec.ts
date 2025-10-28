import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_visitsweden.nl_r3q', ['https://visitsweden.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
