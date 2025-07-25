import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_wetzikon.ch_pwt', ['https://www.wetzikon.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
