import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bank11.de_yxg', ['https://www.bank11.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
