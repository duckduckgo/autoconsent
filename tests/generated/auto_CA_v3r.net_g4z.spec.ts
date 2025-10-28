import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_v3r.net_g4z', ['https://www.v3r.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
