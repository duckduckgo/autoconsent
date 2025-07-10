import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_pubs.acs.org_q5j', ['https://pubs.acs.org/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
