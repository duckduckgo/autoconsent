import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_pubs.acs.org_qdy', ['https://pubs.acs.org/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
