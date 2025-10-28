import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_visitsweden.nl_i6f', ['https://visitsweden.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
