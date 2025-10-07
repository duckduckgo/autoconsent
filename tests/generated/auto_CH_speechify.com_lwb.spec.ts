import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_speechify.com_lwb', ['https://speechify.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
