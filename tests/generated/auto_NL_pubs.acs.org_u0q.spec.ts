import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_pubs.acs.org_u0q', ['https://pubs.acs.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
