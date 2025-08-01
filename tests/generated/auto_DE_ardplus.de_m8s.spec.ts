import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ardplus.de_m8s', ['https://www.ardplus.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
