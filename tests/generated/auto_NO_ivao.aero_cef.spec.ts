import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_ivao.aero_cef', ['https://www.ivao.aero/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
