import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_unisg.ch_9cx', ['https://www.unisg.ch/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
