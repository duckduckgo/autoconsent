import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lionshome.de_tqo', ['https://www.lionshome.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
