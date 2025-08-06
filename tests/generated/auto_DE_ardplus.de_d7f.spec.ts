import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ardplus.de_d7f', ['https://www.ardplus.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
