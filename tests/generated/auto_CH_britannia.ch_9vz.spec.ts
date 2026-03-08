import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_britannia.ch_9vz', ['https://britannia.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
