import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hilfe.ard.de_cbd', ['https://hilfe.ard.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
