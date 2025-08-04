import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_saily.com_cpc', ['https://saily.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
