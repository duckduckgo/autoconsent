import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_coinforum.de_uqz', ['https://coinforum.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
