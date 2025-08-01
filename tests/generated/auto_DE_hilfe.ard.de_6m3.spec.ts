import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hilfe.ard.de_6m3', ['https://hilfe.ard.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
