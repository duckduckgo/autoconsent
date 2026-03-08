import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_17ziele.de_yct', ['https://17ziele.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
