import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lionshome.de_g8o', ['https://www.lionshome.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
