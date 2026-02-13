import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_landshut.de_7ys', ['https://landshut.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
