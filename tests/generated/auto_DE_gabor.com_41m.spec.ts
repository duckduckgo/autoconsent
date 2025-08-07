import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_gabor.com_41m', ['https://www.gabor.com/de_de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
