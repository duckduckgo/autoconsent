import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_davobieren.nl_n7b', ['https://davobieren.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
