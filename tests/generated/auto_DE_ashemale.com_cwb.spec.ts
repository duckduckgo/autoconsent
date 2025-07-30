import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ashemale.com_cwb', ['https://www.ashemale.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
