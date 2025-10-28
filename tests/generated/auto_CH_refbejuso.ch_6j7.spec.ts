import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_refbejuso.ch_6j7', ['https://www.refbejuso.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
