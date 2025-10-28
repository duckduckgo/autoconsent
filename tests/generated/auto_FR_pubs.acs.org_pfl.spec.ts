import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pubs.acs.org_pfl', ['https://pubs.acs.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
