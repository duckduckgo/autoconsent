import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_speyer.de_ntw', ['https://www.speyer.de/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
