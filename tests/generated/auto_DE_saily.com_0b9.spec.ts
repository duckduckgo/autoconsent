import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_saily.com_0b9', ['https://saily.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
