import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_reshade.me_tuf', ['https://reshade.me/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
