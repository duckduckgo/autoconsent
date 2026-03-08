import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_emphase.ch_wzm', ['https://emphase.ch/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
