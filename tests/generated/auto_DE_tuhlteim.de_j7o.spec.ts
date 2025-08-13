import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_tuhlteim.de_j7o', ['https://tuhlteim.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
