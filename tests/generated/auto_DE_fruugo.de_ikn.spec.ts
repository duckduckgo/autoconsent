import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fruugo.de_ikn', ['https://www.fruugo.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
