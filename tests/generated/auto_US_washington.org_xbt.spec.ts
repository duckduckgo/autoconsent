import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_washington.org_xbt', ['https://washington.org/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
