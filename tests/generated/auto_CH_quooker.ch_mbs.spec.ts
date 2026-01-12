import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_quooker.ch_mbs', ['https://www.quooker.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
