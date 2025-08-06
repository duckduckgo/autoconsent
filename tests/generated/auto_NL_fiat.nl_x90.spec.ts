import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_fiat.nl_x90', ['https://www.fiat.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
