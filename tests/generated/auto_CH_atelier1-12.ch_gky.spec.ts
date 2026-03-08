import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_atelier1-12.ch_gky', ['https://atelier1-12.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
