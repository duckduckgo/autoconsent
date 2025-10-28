import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_a-welle.ch_529', ['https://www.a-welle.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
