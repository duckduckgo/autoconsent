import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_6relax.de_jpd', ['https://www.6relax.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
