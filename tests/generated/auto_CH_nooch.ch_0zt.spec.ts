import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_nooch.ch_0zt', ['https://www.nooch.ch/en/home'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
