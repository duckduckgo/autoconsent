import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_help.ch_k8k', ['https://www.help.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
