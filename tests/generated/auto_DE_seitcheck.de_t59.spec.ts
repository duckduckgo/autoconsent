import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_seitcheck.de_t59', ['https://seitcheck.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
