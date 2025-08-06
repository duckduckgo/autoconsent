import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vevor.de_g6c', ['https://www.vevor.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
