import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_marktcom.de_64n', ['https://www.marktcom.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
