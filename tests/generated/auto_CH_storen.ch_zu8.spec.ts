import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_storen.ch_zu8', ['https://www.storen.ch/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
