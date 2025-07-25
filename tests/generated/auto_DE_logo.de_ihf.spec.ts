import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_logo.de_ihf', ['https://www.logo.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
