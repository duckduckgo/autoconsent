import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_olympia.nl_9qw', ['https://www.olympia.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
