import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_nordvpn.com_xdv', ['https://nordvpn.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
