import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_seefeld.com_e6k', ['https://www.seefeld.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
