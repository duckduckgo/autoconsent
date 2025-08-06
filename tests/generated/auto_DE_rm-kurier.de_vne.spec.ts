import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_rm-kurier.de_vne', ['https://rm-kurier.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
