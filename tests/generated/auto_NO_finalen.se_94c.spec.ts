import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_finalen.se_94c', ['https://finalen.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
