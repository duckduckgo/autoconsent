import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_pubs.acs.org_5af', ['https://pubs.acs.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
