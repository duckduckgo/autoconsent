import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_amalie.de_3fo', ['https://amalie.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
