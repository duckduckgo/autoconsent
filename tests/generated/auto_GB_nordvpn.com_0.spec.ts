import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_nordvpn.com_0', ['https://nordvpn.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
