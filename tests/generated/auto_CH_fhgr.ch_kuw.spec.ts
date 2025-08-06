import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fhgr.ch_kuw', ['https://www.fhgr.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
