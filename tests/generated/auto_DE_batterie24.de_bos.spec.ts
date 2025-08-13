import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_batterie24.de_bos', ['https://batterie24.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
