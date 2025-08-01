import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_unisg.ch_4ak', ['https://www.unisg.ch/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
