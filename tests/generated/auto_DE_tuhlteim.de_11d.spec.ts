import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_tuhlteim.de_11d', ['https://tuhlteim.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
