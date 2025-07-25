import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_landshut.de_zra', ['https://landshut.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
