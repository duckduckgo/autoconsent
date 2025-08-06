import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hanau.de_1pj', ['https://www.hanau.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
