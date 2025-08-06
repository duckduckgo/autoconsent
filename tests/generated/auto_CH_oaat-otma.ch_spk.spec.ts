import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_oaat-otma.ch_spk', ['https://oaat-otma.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
