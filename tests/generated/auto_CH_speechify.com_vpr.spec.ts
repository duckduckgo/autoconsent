import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_speechify.com_vpr', ['https://speechify.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
