import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_faphouse.com_p8h', ['https://faphouse.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
