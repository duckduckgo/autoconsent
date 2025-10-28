import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_sps-forum.de_mez', ['https://www.sps-forum.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
