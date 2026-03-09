import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kitbag.com_wo8', ['https://www.kitbag.com/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
