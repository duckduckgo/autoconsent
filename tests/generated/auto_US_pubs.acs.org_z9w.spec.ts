import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_pubs.acs.org_z9w', ['https://pubs.acs.org/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
