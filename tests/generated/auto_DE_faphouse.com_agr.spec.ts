import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_faphouse.com_agr', ['https://faphouse.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
