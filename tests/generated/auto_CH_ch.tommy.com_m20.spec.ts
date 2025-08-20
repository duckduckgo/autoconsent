import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ch.tommy.com_m20', ['https://ch.tommy.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
