import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_leukerbad.ch_1bi', ['https://leukerbad.ch/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
