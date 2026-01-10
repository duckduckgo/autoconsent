import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_armtec.ch_vud', ['https://armtec.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
