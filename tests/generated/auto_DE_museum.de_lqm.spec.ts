import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_museum.de_lqm', ['https://www.museum.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
