import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_dnsrobot.net_346', ['https://dnsrobot.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
