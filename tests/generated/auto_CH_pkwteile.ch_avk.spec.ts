import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_pkwteile.ch_avk', ['https://www.pkwteile.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
