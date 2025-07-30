import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fr.youporn.com_hzz', ['https://fr.youporn.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
