import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bestatter.de_6b9', ['https://www.bestatter.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
