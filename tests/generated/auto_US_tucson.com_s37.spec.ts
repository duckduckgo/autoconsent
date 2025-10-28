import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_tucson.com_s37', ['https://tucson.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
