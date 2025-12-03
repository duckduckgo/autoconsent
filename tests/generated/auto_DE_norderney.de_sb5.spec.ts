import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_norderney.de_sb5', ['https://www.norderney.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
