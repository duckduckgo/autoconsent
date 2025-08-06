import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_zdfheute.de_9og', ['https://www.zdfheute.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
