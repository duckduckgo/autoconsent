import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_kleding.nl_227', ['https://www.kleding.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
