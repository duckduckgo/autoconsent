import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ch-cultura.ch_p4z', ['https://ch-cultura.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
