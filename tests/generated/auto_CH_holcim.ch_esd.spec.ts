import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_holcim.ch_esd', ['https://www.holcim.ch/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
