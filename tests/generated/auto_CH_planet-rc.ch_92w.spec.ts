import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_planet-rc.ch_92w', ['https://planet-rc.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
