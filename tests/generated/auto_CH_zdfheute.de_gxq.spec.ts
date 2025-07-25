import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_zdfheute.de_gxq', ['https://www.zdfheute.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
