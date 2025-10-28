import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fitshop.ch_dth', ['https://www.fitshop.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
