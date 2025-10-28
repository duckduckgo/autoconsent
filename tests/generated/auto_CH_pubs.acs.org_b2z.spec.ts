import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_pubs.acs.org_b2z', ['https://pubs.acs.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
