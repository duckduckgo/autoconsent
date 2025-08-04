import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_rotho.com_7gc', ['https://rotho.com/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
