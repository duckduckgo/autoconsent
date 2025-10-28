import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_miinto.nl_6k7', ['https://www.miinto.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
