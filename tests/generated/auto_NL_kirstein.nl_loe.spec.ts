import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_kirstein.nl_loe', ['https://www.kirstein.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
