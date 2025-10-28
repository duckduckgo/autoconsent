import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_newegg.com_rnl', ['https://www.newegg.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
