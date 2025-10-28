import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_southpark.de_xpv', ['https://www.southpark.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
