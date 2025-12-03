import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_trustly.com_2hm', ['https://www.trustly.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
