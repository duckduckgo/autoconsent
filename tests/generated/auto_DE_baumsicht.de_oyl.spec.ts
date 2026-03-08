import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_baumsicht.de_oyl', ['https://baumsicht.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
