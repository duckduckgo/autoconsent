import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ashemale.com_ilu', ['https://www.ashemale.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
