import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_actus.sfr.fr_ofl', ['https://actus.sfr.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
