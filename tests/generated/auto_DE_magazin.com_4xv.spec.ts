import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_magazin.com_4xv', ['https://www.magazin.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
