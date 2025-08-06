import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_tuhlteim.de_0k2', ['https://tuhlteim.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
