import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_nordvpn.com_3c5', ['https://nordvpn.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
