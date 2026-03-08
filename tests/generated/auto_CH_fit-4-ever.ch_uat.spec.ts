import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fit-4-ever.ch_uat', ['https://fit-4-ever.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
