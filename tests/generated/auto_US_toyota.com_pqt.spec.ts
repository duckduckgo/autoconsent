import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_toyota.com_pqt', ['https://www.toyota.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
