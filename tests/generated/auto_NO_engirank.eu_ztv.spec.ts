import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_engirank.eu_ztv', ['https://engirank.eu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
