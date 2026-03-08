import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_cozygaming.net_ux8', ['http://cozygaming.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
