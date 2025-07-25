import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_autoampel.de_109', ['http://www.autoampel.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
