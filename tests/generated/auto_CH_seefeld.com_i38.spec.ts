import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_seefeld.com_i38', ['https://www.seefeld.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
