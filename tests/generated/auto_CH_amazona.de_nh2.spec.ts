import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_amazona.de_nh2', ['https://www.amazona.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
