import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_charitea.com_qli', ['https://charitea.com/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
