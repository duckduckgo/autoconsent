import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_caldaro.com_d1s', ['https://caldaro.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
