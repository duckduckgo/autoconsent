import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_norsan.ch_pk2', ['https://norsan.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
