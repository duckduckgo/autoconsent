import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_faphouse.com_va7', ['https://faphouse.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
