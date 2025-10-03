import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fein.com_k95', ['https://fein.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
