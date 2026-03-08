import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_acmerlaser.com_tgb', ['https://acmerlaser.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
