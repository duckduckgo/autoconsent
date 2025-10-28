import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_gkb.ch_usr', ['https://www.gkb.ch/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
