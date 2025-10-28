import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_tranny.one_p6r', ['https://www.tranny.one/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
