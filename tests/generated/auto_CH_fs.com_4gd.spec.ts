import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fs.com_4gd', ['https://www.fs.com/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
