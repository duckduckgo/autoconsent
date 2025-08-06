import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_pkwteile.ch_1f7', ['https://www.pkwteile.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
