import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_aurednik.de_kh5', ['https://aurednik.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
