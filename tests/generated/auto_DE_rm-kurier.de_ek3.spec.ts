import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_rm-kurier.de_ek3', ['https://rm-kurier.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
