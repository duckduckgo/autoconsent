import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_alpenbrevet.ch_lve', ['https://alpenbrevet.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
