import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_blabladoc.de_q00', ['https://blabladoc.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
