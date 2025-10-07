import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fein.com_bmr', ['https://fein.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
