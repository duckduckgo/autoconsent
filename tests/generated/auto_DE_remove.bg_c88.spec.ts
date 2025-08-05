import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_remove.bg_c88', ['https://www.remove.bg/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
