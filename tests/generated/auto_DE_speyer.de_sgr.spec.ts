import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_speyer.de_sgr', ['https://www.speyer.de/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
