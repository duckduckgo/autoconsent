import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_pubs.acs.org_ny3', ['https://pubs.acs.org/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
