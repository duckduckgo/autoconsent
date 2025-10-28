import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_advocard.de_2e6', ['https://www.advocard.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
