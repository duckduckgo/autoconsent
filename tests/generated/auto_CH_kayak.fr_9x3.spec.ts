import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_kayak.fr_9x3', ['https://www.kayak.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
