import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_tutonaut.de_20j', ['https://www.tutonaut.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
