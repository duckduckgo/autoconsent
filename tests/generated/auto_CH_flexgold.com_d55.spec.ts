import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_flexgold.com_d55', ['https://flexgold.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
