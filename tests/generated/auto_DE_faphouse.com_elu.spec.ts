import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_faphouse.com_elu', ['https://faphouse.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
