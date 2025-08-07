import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ashemale.com_sy4', ['https://www.ashemale.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
