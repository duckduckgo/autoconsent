import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_csgoroll.com_8sn', ['https://www.csgoroll.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
