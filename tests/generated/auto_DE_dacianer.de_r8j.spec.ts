import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dacianer.de_r8j', ['https://www.dacianer.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
