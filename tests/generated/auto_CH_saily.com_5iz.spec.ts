import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_saily.com_5iz', ['https://saily.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
