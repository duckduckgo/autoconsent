import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bergpunkt.ch_we4', ['https://bergpunkt.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
