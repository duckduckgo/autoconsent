import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_kcrg.com_6sk', ['https://www.kcrg.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
