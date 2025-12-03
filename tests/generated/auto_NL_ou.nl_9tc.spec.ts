import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ou.nl_9tc', ['https://www.ou.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
