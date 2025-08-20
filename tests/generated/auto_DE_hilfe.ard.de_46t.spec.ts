import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hilfe.ard.de_46t', ['https://hilfe.ard.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
