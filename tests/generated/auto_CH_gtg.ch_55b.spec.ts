import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_gtg.ch_55b', ['https://www.gtg.ch/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
