import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_arenagroup.ch_721', ['https://arenagroup.ch/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
