import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_faustkultur.de_mvy', ['https://faustkultur.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
