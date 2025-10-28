import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_linkedin.com_9v7', ['https://www.linkedin.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
