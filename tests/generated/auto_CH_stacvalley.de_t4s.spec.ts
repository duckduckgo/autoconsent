import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_stacvalley.de_t4s', ['https://en.stacvalley.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
