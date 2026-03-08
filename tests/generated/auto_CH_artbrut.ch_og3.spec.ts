import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_artbrut.ch_og3', ['https://artbrut.ch/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
