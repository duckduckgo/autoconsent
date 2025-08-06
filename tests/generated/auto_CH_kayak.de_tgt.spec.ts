import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_kayak.de_tgt', ['https://www.kayak.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
