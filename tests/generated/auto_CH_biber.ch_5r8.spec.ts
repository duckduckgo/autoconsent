import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_biber.ch_5r8', ['https://www.biber.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
