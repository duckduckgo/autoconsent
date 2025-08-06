import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fernarzt.com_4tu', ['https://www.fernarzt.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
