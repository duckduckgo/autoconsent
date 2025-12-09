import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hpi.de_bb0', ['https://hpi.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
