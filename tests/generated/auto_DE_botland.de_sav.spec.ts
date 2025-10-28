import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_botland.de_sav', ['https://botland.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
