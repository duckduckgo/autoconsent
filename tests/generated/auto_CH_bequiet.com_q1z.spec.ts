import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bequiet.com_q1z', ['https://www.bequiet.com/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
