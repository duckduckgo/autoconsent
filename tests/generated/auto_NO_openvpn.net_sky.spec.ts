import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_openvpn.net_sky', ['https://openvpn.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
