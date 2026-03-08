import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_365werk.nl_d6i', ['https://365werk.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
