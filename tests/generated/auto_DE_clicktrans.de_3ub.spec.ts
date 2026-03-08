import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_clicktrans.de_3ub', ['https://clicktrans.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
