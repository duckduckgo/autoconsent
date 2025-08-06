import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_zdf.de_ogd', ['https://www.zdf.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
