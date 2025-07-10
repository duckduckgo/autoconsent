import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_beckett.com_zgk', ['https://www.beckett.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
