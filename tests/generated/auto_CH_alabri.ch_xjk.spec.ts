import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_alabri.ch_xjk', ['https://alabri.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
