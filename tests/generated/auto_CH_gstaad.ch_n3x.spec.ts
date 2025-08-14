import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_gstaad.ch_n3x', ['https://www.gstaad.ch/sommer'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
