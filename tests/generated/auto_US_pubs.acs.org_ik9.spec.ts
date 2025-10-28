import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_pubs.acs.org_ik9', ['https://pubs.acs.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
