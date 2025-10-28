import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_medisiegel.de_ole', ['https://medisiegel.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
