import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_youporn.com_zz7', ['https://www.youporn.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
