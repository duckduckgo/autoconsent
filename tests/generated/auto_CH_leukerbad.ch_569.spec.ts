import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_leukerbad.ch_569', ['https://leukerbad.ch/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
