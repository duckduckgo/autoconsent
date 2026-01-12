import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_mediathek.ch_k6e', ['https://www.mediathek.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
