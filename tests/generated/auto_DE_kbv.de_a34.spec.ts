import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kbv.de_a34', ['https://www.kbv.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
