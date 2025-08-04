import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_faphouse.com_98e', ['https://faphouse.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
