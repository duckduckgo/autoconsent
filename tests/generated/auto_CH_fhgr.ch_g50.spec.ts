import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fhgr.ch_g50', ['https://www.fhgr.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
