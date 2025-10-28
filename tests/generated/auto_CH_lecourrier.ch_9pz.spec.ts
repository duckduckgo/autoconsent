import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_lecourrier.ch_9pz', ['https://lecourrier.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
