import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fein.com_h3v', ['https://fein.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
