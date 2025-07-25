import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ancestry.de_qgo', ['https://www.ancestry.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
