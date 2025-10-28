import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_gamersupps.gg_jxv', ['https://gamersupps.gg/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
