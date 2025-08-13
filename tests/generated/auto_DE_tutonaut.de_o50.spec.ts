import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_tutonaut.de_o50', ['https://www.tutonaut.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
