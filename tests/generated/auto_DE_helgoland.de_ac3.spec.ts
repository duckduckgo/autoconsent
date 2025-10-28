import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_helgoland.de_ac3', ['https://www.helgoland.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
