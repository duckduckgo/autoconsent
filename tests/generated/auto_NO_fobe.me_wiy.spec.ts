import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_fobe.me_wiy', ['https://fobe.me/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
