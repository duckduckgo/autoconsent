import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_dl.acm.org_u7x', ['https://dl.acm.org/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
