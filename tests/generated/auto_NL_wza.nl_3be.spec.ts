import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_wza.nl_3be', ['https://www.wza.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
