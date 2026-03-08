import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_07flip.com_wye', ['https://07flip.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
