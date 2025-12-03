import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_citroen.de_t13', ['https://www.citroen.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
