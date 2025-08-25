import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_frankfurt.de_xyp', ['https://frankfurt.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
