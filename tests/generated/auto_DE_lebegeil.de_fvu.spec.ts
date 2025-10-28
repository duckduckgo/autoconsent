import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lebegeil.de_fvu', ['https://www.lebegeil.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
