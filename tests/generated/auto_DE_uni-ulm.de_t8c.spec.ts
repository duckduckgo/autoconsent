import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_uni-ulm.de_t8c', ['https://www.uni-ulm.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
