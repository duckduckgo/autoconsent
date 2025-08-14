import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bonn.de_ygj', ['https://www.bonn.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
