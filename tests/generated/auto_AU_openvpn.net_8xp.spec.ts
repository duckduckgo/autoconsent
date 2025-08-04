import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_openvpn.net_8xp', ['https://openvpn.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
