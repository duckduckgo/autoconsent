import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_coolbe.ch_353', ['https://www.coolbe.ch/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
