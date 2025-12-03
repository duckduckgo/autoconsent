import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_essent.nl_9nq', ['https://www.essent.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
