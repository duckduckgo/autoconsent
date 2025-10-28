import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ihjo.de_hix', ['https://ihjo.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
