import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_tutonaut.de_1av', ['https://www.tutonaut.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
