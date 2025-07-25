import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bank11.de_uc5', ['https://www.bank11.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
