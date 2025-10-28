import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_treccani.it_j8v', ['https://www.treccani.it/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
