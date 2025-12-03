import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kvsachsen.de_84v', ['https://www.kvsachsen.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
