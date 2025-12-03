import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fs.com_c4d', ['https://www.fs.com/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
