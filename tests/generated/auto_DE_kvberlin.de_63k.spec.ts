import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kvberlin.de_63k', ['https://www.kvberlin.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
