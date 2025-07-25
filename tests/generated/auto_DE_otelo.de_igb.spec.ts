import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_otelo.de_igb', ['https://www.otelo.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
