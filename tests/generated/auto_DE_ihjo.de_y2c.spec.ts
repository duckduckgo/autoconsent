import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ihjo.de_y2c', ['https://ihjo.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
