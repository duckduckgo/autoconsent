import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_tecadmin.net_gul', ['https://tecadmin.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
