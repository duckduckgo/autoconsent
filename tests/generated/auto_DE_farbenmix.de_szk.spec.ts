import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_farbenmix.de_szk', ['https://farbenmix.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
