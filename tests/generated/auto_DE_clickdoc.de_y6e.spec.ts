import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_clickdoc.de_y6e', ['https://clickdoc.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
