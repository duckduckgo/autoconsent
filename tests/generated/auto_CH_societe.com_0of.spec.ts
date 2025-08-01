import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_societe.com_0of', ['https://www.societe.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
