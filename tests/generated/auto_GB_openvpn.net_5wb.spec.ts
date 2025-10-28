import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_openvpn.net_5wb', ['https://openvpn.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
