import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_felmo.de_zlt', ['https://felmo.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
