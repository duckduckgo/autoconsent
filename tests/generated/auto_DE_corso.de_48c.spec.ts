import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_corso.de_48c', ['https://corso.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
