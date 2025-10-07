import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_saily.com_ou5', ['https://saily.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
