import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_air-zrh.ch_jdn', ['https://air-zrh.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
