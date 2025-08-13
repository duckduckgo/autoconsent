import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_huk24.de_ira', ['https://www.huk24.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
