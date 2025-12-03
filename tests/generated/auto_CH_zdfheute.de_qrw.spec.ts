import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_zdfheute.de_qrw', ['https://www.zdfheute.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
