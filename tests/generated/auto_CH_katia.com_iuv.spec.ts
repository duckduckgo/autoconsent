import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_katia.com_iuv', ['https://www.katia.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
