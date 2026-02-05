import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_moebel.de_rlv', ['https://www.moebel.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
