import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_pubs.acs.org_61d', ['https://pubs.acs.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
