import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_gabor.com_f02', ['https://www.gabor.com/de_de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
