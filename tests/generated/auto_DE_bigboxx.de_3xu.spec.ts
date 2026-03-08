import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bigboxx.de_3xu', ['https://bigboxx.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
