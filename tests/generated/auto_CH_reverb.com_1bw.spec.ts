import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_reverb.com_1bw', ['https://reverb.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
