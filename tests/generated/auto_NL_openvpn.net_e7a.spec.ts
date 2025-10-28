import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_openvpn.net_e7a', ['https://openvpn.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
