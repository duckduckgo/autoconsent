import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_societe.com_f1v', ['https://www.societe.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
