import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_openvpn.net_vt2', ['https://openvpn.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
