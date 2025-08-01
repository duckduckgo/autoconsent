import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ancestry.com_k35', ['https://www.ancestry.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
