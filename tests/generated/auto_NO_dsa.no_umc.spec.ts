import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_dsa.no_umc', ['https://www.dsa.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
