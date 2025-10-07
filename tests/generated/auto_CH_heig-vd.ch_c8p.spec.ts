import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_heig-vd.ch_c8p', ['https://heig-vd.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
