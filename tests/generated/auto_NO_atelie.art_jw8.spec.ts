import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_atelie.art_jw8', ['https://atelie.art/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
