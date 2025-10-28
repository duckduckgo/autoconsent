import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_sportsnow.ch_5m7', ['https://www.sportsnow.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
