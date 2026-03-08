import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ar.youporn.com_wk7', ['https://ar.youporn.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
