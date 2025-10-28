import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_kispisg.ch_27m', ['https://www.kispisg.ch/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
