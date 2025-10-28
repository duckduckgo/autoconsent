import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_zofingen.ch_siq', ['https://www.zofingen.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
