import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_tecadmin.net_7mh', ['https://tecadmin.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
