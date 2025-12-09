import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_festineuch.ch_72x', ['https://festineuch.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
