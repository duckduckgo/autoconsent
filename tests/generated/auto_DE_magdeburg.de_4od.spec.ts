import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_magdeburg.de_4od', ['https://www.magdeburg.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
