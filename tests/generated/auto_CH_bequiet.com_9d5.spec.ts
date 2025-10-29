import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bequiet.com_9d5', ['https://www.bequiet.com/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
