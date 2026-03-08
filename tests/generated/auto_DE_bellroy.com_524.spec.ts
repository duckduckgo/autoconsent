import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bellroy.com_524', ['https://bellroy.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
