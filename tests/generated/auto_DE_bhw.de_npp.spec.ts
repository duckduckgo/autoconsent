import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bhw.de_npp', ['https://www.bhw.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
