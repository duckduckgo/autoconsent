import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_beanwatch.ch_jmy', ['https://beanwatch.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
