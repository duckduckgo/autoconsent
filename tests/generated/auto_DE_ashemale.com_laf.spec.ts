import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ashemale.com_laf', ['https://www.ashemale.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
