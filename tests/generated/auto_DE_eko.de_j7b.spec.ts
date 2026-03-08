import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_eko.de_j7b', ['https://eko.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
