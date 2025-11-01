import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_autoampel.de_5ah', ['https://www.autoampel.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
