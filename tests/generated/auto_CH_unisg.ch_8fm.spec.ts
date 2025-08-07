import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_unisg.ch_8fm', ['https://www.unisg.ch/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
