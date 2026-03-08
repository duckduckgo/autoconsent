import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_admin.ks.gov_ayn', ['https://admin.ks.gov/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
