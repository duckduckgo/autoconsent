import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_remove.bg_mrs', ['https://www.remove.bg/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
