import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hoyer.de_dgi', ['https://www.hoyer.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
