import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kunzmann.de_b94', ['https://www.kunzmann.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
