import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_drdoit.de_mfs', ['https://drdoit.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
