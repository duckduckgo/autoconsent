import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_openvpn.net_qfh', ['https://openvpn.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
