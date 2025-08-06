import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lbs.de_g9n', ['https://www.lbs.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
