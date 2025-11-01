import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_tattle.life_tr1', ['https://tattle.life/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
