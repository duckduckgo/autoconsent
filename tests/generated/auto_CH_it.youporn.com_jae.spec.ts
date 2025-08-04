import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_it.youporn.com_jae', ['https://it.youporn.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
