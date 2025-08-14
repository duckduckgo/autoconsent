import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_brillen24.nl_08c', ['https://www.brillen24.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
