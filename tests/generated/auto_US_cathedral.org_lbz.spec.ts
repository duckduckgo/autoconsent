import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_cathedral.org_lbz', ['https://cathedral.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
