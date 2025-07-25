import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_gstaad.ch_0kr', ['https://www.gstaad.ch/sommer'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
