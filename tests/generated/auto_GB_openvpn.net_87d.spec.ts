import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_openvpn.net_87d', ['https://openvpn.net/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
