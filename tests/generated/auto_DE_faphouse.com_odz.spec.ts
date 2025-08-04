import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_faphouse.com_odz', ['https://faphouse.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
