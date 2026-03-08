import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_5minmail.com_735', ['https://5minmail.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
