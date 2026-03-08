import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_collmann.eu_t0h', ['https://collmann.eu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
