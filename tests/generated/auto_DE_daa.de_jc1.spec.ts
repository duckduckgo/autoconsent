import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_daa.de_jc1', ['https://daa.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
