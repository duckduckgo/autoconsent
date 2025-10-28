import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_tattle.life_u7z', ['https://tattle.life/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
