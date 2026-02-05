import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_loxone.com_ezi', ['https://www.loxone.com/dede/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
