import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_aarau.ch_fi0', ['https://www.aarau.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
