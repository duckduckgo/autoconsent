import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_cineflix.com_8c6', ['https://cineflix.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
