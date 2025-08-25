import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_storen.ch_vqn', ['https://www.storen.ch/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
