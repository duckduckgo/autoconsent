import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_arvenkissen.ch_kds', ['https://arverei.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
