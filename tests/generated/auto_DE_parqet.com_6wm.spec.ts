import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_parqet.com_6wm', ['https://www.parqet.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
