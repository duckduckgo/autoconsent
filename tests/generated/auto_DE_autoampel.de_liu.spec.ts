import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_autoampel.de_liu', ['https://www.autoampel.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
