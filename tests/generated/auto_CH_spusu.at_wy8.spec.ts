import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_spusu.at_wy8', ['https://www.spusu.at/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
