import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_woonbond.nl_yke', ['https://www.woonbond.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
