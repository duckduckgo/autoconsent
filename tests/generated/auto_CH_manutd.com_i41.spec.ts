import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_manutd.com_i41', ['https://www.manutd.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
