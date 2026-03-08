import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_es.youporn.com_xm4', ['https://es.youporn.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
