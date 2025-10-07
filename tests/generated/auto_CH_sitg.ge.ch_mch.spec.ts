import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_sitg.ge.ch_mch', ['https://sitg.ge.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
