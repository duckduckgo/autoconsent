import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_6relax.de_3ol', ['https://www.6relax.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
