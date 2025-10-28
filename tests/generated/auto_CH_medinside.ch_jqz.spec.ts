import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_medinside.ch_jqz', ['https://www.medinside.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
