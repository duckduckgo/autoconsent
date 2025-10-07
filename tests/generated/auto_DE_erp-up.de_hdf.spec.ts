import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_erp-up.de_hdf', ['https://erp-up.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
