import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_niesen.ch_2yn', ['https://www.niesen.ch/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
