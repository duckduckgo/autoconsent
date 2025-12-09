import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_tattle.life_xuk', ['https://tattle.life/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
