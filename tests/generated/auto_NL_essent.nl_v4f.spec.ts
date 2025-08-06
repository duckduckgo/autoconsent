import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_essent.nl_v4f', ['https://www.essent.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
