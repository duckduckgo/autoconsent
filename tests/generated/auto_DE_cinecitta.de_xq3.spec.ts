import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_cinecitta.de_xq3', ['https://www.cinecitta.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
