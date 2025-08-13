import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kzvb.de_7t3', ['https://www.kzvb.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
