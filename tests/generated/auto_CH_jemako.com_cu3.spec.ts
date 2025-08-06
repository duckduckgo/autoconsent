import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_jemako.com_cu3', ['https://www.jemako.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
