import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_dak.de_ppg', ['https://www.dak.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
