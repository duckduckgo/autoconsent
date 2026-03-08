import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_foodhealth.ch_3ds', ['https://foodhealth.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
