import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_florage.de_wqz', ['https://florage.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
