import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_openvpn.net_kpm', ['https://openvpn.net/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
