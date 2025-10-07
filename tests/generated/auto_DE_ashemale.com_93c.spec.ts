import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ashemale.com_93c', ['https://www.ashemale.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
