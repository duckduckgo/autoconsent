import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ihjo.de_1yy', ['https://ihjo.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
