import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_mensa.org_piz', ['https://www.mensa.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
