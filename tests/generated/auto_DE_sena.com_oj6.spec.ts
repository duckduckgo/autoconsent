import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sena.com_oj6', ['https://www.sena.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
