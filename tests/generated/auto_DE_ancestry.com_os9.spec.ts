import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ancestry.com_os9', ['https://www.ancestry.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
