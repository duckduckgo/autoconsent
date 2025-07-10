import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_cpr.heart.org_jwc', ['https://cpr.heart.org/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
