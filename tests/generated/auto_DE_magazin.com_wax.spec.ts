import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_magazin.com_wax', ['https://www.magazin.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
