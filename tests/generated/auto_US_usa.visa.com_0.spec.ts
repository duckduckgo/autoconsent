import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_usa.visa.com_0', ['https://usa.visa.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
