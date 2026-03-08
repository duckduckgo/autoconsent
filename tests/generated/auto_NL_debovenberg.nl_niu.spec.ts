import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_debovenberg.nl_niu', ['https://debovenberg.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
