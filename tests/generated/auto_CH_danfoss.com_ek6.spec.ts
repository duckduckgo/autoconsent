import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_danfoss.com_ek6', ['https://www.danfoss.com/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
