import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_farm.landi.ch_llw', ['https://farm.landi.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
