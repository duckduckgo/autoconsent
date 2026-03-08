import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_alias-zhaw.ch_2qo', ['https://alias-zhaw.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
