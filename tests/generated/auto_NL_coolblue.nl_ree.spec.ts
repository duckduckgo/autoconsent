import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_coolblue.nl_ree', ['https://www.coolblue.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
