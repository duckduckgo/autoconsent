import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_somfy.de_c4z', ['https://www.somfy.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
