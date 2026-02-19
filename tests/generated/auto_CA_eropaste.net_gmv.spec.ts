import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_eropaste.net_gmv', ['https://eropaste.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
