import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_art-restore.ch_b95', ['https://art-restore.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
