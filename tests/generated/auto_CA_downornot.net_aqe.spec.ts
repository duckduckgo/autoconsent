import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_downornot.net_aqe', ['https://downornot.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
