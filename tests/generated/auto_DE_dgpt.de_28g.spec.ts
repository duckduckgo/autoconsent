import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dgpt.de_28g', ['https://dgpt.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
