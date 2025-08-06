import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_opernhaus.ch_wm7', ['https://www.opernhaus.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
