import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_saily.com_21d', ['https://saily.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
