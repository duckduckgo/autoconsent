import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_woonsferen.nl_7jq', ['https://woonsferen.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
