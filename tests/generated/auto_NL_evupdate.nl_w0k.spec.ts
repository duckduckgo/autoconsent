import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_evupdate.nl_w0k', ['https://www.evupdate.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
