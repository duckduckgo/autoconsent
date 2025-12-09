import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_evupdate.nl_9m8', ['https://www.evupdate.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
