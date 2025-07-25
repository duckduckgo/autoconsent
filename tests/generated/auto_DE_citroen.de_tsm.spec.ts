import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_citroen.de_tsm', ['https://www.citroen.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
