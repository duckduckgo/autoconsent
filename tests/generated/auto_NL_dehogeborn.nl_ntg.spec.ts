import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dehogeborn.nl_ntg', ['https://dehogeborn.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
