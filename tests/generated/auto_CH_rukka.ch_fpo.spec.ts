import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_rukka.ch_fpo', ['https://www.rukka.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
