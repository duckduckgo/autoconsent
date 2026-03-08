import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_casadelsole.tv_9lk', ['https://casadelsole.tv/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
