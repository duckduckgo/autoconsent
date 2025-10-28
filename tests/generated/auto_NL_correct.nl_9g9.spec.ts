import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_correct.nl_9g9', ['https://www.correct.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
