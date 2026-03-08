import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_chemist.eu_lld', ['https://chemist.eu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
