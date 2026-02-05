import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_one.com_0jq', ['https://www.one.com/en-gb/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
