import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vrijverbond.nl_0iv', ['https://vrijverbond.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
