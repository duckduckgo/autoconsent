import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_swoodoo.ch_abw', ['https://www.swoodoo.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
