import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_gabor.com_mto', ['https://www.gabor.com/de_de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
