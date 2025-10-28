import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dezwijger.nl_9c7', ['https://dezwijger.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
