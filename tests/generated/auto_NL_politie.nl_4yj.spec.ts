import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_politie.nl_4yj', ['https://www.politie.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
