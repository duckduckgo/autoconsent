import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_tuhlteim.de_16f', ['https://tuhlteim.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
