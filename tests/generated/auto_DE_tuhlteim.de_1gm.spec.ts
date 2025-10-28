import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_tuhlteim.de_1gm', ['https://tuhlteim.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
