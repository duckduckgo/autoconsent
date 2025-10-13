import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_rm-kurier.de_b1q', ['https://rm-kurier.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
