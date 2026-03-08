import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_consol.ch_rsz', ['https://consol.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
