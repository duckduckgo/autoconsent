import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_leukerbad.ch_wtl', ['https://leukerbad.ch/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
