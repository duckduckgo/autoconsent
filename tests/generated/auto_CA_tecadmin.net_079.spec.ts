import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_tecadmin.net_079', ['https://tecadmin.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
