import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_domain.ch_hln', ['https://www.domain.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
