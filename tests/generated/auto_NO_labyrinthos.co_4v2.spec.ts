import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_labyrinthos.co_4v2', ['https://labyrinthos.co/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
