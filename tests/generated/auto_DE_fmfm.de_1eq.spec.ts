import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fmfm.de_1eq', ['https://www.fmfm.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
