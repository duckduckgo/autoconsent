import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_ethos.com_ybi', ['https://www.ethos.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
