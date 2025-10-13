import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kbv.de_9ic', ['https://www.kbv.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
