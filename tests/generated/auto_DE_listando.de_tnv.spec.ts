import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_listando.de_tnv', ['https://www.listando.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
