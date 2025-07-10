import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_openvpn.net_59j', ['https://openvpn.net/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
