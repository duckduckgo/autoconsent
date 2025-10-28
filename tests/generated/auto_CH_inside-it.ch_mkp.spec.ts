import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_inside-it.ch_mkp', ['https://www.inside-it.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
