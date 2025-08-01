import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dtvp.de_t1m', ['https://dtvp.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
