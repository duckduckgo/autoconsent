import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_tutonaut.de_llk', ['https://www.tutonaut.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
