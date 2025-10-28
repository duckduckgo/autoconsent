import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_klangwelt.ch_98h', ['https://klangwelt.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
