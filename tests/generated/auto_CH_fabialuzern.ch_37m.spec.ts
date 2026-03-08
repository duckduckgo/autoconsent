import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fabialuzern.ch_37m', ['https://fabialuzern.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
