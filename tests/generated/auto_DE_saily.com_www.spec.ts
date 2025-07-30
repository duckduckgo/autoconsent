import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_saily.com_www', ['https://saily.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
