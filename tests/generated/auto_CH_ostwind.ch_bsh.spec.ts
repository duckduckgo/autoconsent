import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ostwind.ch_bsh', ['https://www.ostwind.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
