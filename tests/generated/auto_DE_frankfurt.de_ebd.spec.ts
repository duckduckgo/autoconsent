import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_frankfurt.de_ebd', ['https://frankfurt.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
