import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_parqet.com_6wm', ['https://parqet.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
