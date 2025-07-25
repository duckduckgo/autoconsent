import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_tuhlteim.de_p0v', ['https://tuhlteim.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
