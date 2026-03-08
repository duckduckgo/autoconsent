import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_florando.de_401', ['https://florando.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
