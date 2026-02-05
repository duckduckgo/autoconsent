import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_marburg.de_56c', ['https://www.marburg.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
