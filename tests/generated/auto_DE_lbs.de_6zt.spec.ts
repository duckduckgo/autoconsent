import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lbs.de_6zt', ['https://www.lbs.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
