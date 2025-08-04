import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_speyer.de_p9d', ['https://www.speyer.de/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
