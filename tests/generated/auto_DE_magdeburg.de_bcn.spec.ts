import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_magdeburg.de_bcn', ['https://www.magdeburg.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
