import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_mdcalc.com_zc7', ['https://www.mdcalc.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
