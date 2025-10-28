import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_datasport.com_sw5', ['https://datasport.com/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
