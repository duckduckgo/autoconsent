import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_swissjews.ch_jfg', ['https://swissjews.ch/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
