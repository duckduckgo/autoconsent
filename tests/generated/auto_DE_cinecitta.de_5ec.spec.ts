import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_cinecitta.de_5ec', ['https://www.cinecitta.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
