import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_bottin.uda.ca_pj2', ['https://bottin.uda.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
