import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fernarzt.com_wvm', ['https://www.fernarzt.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
