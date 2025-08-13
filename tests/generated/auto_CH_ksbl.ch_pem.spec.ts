import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ksbl.ch_pem', ['https://www.ksbl.ch/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
