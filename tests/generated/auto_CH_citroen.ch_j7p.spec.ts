import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_citroen.ch_j7p', ['https://www.citroen.ch/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
