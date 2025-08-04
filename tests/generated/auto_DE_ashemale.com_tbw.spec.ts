import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ashemale.com_tbw', ['https://www.ashemale.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
