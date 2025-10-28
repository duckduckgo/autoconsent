import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_wlan.net_ur0', ['https://wlan.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
