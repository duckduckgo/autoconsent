import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hoyer.de_4ag', ['https://www.hoyer.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
