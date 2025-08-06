import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kvsachsen.de_e06', ['https://www.kvsachsen.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
