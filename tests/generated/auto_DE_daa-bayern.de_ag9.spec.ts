import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_daa-bayern.de_ag9', ['https://daa-bayern.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
