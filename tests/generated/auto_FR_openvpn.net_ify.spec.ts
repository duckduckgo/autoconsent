import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_openvpn.net_ify', ['https://openvpn.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
