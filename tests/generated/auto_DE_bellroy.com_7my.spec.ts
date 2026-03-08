import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bellroy.com_7my', ['https://bellroy.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
