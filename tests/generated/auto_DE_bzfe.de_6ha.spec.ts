import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bzfe.de_6ha', ['https://www.bzfe.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
