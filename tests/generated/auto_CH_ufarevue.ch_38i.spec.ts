import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ufarevue.ch_38i', ['https://www.ufarevue.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
