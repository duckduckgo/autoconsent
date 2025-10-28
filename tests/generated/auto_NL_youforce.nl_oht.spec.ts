import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_youforce.nl_oht', ['https://youforce.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
