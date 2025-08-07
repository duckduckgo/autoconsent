import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ancestry.com_jpk', ['https://www.ancestry.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
