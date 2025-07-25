import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mantel.com_l30', ['https://www.mantel.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
