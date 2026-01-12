import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_speyer.de_w4q', ['https://www.speyer.de/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
