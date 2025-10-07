import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_heig-vd.ch_k5f', ['https://heig-vd.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
