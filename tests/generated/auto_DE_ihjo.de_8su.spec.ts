import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ihjo.de_8su', ['https://ihjo.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
