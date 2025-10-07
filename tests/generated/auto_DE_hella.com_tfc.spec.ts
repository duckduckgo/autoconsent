import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hella.com_tfc', ['https://www.hella.com/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
