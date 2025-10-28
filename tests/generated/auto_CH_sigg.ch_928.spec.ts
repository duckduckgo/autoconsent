import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_sigg.ch_928', ['https://sigg.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
