import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_remove.bg_sqi', ['https://www.remove.bg/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
