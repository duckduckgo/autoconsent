import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_fruugo.nl_s9f', ['https://www.fruugo.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
