import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ipinfo.io_kl2', ['https://ipinfo.io/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
