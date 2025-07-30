import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_speyer.de_3qq', ['https://www.speyer.de/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
