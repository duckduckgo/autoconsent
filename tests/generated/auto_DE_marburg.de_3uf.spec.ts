import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_marburg.de_3uf', ['https://www.marburg.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
