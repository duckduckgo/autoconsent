import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bwell-swiss.ch_3yu', ['https://bwell-swiss.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
