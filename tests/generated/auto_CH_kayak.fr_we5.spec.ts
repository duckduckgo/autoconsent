import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_kayak.fr_we5', ['https://www.kayak.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
