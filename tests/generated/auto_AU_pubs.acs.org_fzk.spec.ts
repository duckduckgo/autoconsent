import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_pubs.acs.org_fzk', ['https://pubs.acs.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
