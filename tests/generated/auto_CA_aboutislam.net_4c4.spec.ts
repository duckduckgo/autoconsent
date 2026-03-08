import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_aboutislam.net_4c4', ['https://aboutislam.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
