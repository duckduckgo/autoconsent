import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_airbnb.ch_ezv', ['https://www.airbnb.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
