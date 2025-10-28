import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_visitsweden.nl_eed', ['https://visitsweden.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
