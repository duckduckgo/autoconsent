import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dacianer.de_kva', ['https://www.dacianer.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
