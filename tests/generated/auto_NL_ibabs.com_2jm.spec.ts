import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ibabs.com_2jm', ['https://www.ibabs.com/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
