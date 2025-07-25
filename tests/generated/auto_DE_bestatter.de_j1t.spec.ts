import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bestatter.de_j1t', ['https://www.bestatter.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
