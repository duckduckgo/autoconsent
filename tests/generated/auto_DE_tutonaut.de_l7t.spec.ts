import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_tutonaut.de_l7t', ['https://www.tutonaut.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
