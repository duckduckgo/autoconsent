import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_wolplein.nl_sos', ['https://www.wolplein.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
