import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_eu5.guide_2zr', ['https://eu5.guide/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
