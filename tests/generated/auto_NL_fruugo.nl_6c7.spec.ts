import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_fruugo.nl_6c7', ['https://www.fruugo.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
