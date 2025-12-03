import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_societe.com_ny4', ['https://www.societe.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
