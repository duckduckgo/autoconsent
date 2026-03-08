import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_flixhq.pl_kdf', ['https://flixhq.pl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
