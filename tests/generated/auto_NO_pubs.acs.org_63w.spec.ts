import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_pubs.acs.org_63w', ['https://pubs.acs.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
