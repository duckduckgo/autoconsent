import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_it.youporn.com_nvh', ['https://it.youporn.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
