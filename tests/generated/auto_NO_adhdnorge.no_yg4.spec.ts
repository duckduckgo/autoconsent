import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_adhdnorge.no_yg4', ['https://www.adhdnorge.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
