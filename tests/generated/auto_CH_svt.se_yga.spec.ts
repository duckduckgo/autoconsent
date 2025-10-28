import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_svt.se_yga', ['https://www.svt.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
