import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_eca-vaud.ch_6fk', ['https://www.eca-vaud.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
