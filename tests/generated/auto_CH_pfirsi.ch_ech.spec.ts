import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_pfirsi.ch_ech', ['https://pfirsi.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
