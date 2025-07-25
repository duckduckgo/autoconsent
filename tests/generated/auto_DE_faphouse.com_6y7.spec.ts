import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_faphouse.com_6y7', ['https://faphouse.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
