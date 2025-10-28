import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_kirstein.nl_zw1', ['https://www.kirstein.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
