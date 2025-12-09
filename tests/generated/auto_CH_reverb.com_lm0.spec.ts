import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_reverb.com_lm0', ['https://reverb.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
