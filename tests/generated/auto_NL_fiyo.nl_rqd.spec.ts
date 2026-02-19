import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_fiyo.nl_rqd', ['https://www.fiyo.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
