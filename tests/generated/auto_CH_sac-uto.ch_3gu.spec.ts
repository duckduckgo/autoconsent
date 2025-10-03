import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_sac-uto.ch_3gu', ['https://sac-uto.ch/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
