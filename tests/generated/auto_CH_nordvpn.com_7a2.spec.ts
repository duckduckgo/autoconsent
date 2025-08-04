import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_nordvpn.com_7a2', ['https://nordvpn.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
