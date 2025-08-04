import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_bpi.com.ph_hd6', ['https://www.bpi.com.ph/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
