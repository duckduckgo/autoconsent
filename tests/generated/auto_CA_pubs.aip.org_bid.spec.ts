import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_pubs.aip.org_bid', ['https://pubs.aip.org/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
