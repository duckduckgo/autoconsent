import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_rosenfluh.ch_ebm', ['https://www.rosenfluh.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
