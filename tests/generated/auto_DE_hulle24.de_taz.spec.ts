import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hulle24.de_taz', ['https://www.hulle24.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
