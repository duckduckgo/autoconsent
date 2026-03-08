import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_blumenmarkt.ch_7tc', ['https://blumenmarkt.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
