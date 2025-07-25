import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ford.de_qu0', ['https://www.ford.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
