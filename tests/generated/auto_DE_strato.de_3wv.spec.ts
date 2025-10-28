import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_strato.de_3wv', ['https://www.strato.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
